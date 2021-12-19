import React, { FunctionComponent, useState } from 'react';
import NumberFormat from 'react-number-format';
import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import * as yup from 'yup';
import fileSize from 'filesize';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import CircularProgress from '@material-ui/core/CircularProgress';
import InputAdornment from '@material-ui/core/InputAdornment';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

import { useStore } from 'src/store';

import { ADD_PRODUCT, FILE_UPLOAD } from 'src/queries';

import Modal from 'src/components/AppLayout/Merchant/Product/Modal/AddProductModal';
import TextInput from 'src/components/SharedLayout/TextInput';
import Button from 'src/components/SharedLayout/Button';
import LinearProgress from 'src/components/SharedLayout/LinearProgress';
import { useStyles } from 'src/components/AppLayout/Merchant/Product/styled.product';
import useModalControl from 'src/components/hooks/useModalControl';

import {
  PPRODUCT_SIZES,
  COLORS,
  PRODUCT_TAGS,
  PRODUCT_STOCK,
  PRODUCT_CATEGORY,
} from 'src/components/constant/product';

const validationSchema = yup.object().shape({
  productName: yup.string().required('Requiredk'),
  productDescription: yup
    .string()
    .min(250, 'Minimum characters of 250 words')
    .required('Requiredkl'),
  productSize: yup
    .object()
    .shape({ label: yup.string().required(), value: yup.string().required() })
    .nullable(),
  productCategory: yup
    .object()
    .shape({ label: yup.string().required(), value: yup.string().required() })
    .nullable(),
  colors: yup
    .object()
    .shape({ label: yup.string().required(), value: yup.string().required() })
    .nullable(),
  tags: yup
    .object()
    .shape({ label: yup.string().required(), value: yup.string().required() })
    .nullable(),
  stock: yup
    .object()
    .shape({ label: yup.string().required(), value: yup.string().required() })
    .nullable(),
  oldPrice: yup.number().required('Required'),
  newPrice: yup.number().required('Required'),
});

const animatedComponents = makeAnimated();

function NumberFormatCustom(props: any) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
    />
  );
}

type Props = {
  value: string;
  label: string;
};

const AddProduct: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const { uiStore } = useStore();
  const [state, setState] = useModalControl();
  // const [selectedProduct, setSelectedProduct] = useState<{
  //   value: string;
  //   label: string;
  // }>({
  //   value: '',
  //   label: '',
  // });
  // const [selectedSize, setSelectedSize] = useState<Array<Props>>([]);
  const [selectedColor, setSelectedColor] = useState<Array<Props>>([]);
  const [selectedTag, setSelectedTag] = useState<Array<Props>>([]);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [imageName, setImageName] = useState<string>('');
  const [imageSize, setImageSize] = useState<string>('');
  const [isImage, setIsImage] = useState<boolean>(false);
  // const [selectedStock, setSelectedStock] = useState<{
  //   value: string;
  //   label: string;
  // }>({ value: '', label: '' });
  const [isError, setIsError] = useState<{
    productError: boolean;
    sizeError: boolean;
    colorError: boolean;
    tagError: boolean;
    stockError: boolean;
  }>({
    productError: false,
    sizeError: false,
    colorError: false,
    tagError: false,
    stockError: false,
  });

  const [addProduct, { loading }] = useMutation(ADD_PRODUCT);
  const [fileUpload] = useMutation(FILE_UPLOAD, {
    onCompleted: (data) => {
      if (data) {
        const {
          fileUpload: { url },
        } = data.client;
        setImageUrl(url);
        setIsImage(false);
      }
    },
  });

  const handleCloseModal = () => {
    setState({ ...state, modal: '' });
  };

  const _handleForm = async () => {
    const productSizes = Object.values(formik.values.productSize);
    const productSize = productSizes.map(({ value }: any) => value);

    const productColors = Object.values(formik.values.colors);
    const colors = productColors.map(({ value }: any) => value);

    const productTags = Object.values(formik.values.tags);
    const tags = productTags.map(({ value }: any) => value);

    const payload = {
      colors,
      tags,
      imageUrl,
      sizes: productSize,
      description: formik.values.productDescription,
      name: formik.values.productName,
      category: formik.values.productCategory.value,
      stock: formik.values.stock.value,
      oldPrice: formik.values.oldPrice,
      newPrice: formik.values.newPrice,
    };
    try {
      const newProduct = await addProduct({
        variables: {
          ...payload,
        },
      });
      if (newProduct) {
        const {
          data: {
            client: {
              addProduct: { message },
            },
          },
        } = newProduct;
        uiStore.serverMessage = message;
        uiStore.snackbarSeverity = 'success';
        uiStore.showSnackbar = true;
        // setSelectedSize([]);
        // setSelectedTag([]);
        // setSelectedColor([]);
        // setSelectedProduct({ value: '', label: '' });
        // setSelectedStock({ value: '', label: '' });
        resetForm();
      }
    } catch (error) {
      uiStore.serverMessage = 'An error occured';
      uiStore.snackbarSeverity = 'error';
      uiStore.showSnackbar = true;
    }
    // const colors = selectedColor.map((color: { value: string }) => color.value);
    // const productSizes = selectedSize.map(
    //   (size: { value: string }) => size.value
    // );
    // const tags = selectedTag.map((tag: { value: string }) => tag.value);
    // try {
    //   const payload = {
    //     colors,
    //     tags,
    //     imageUrl,
    //     sizes: productSizes,
    //     name: formik.values.productName,
    //     description: formik.values.productDescription,
    //     oldPrice: formik.values.oldPrice,
    //     newPrice: formik.values.newPrice,
    //     category: selectedProduct.value,
    //     stock: selectedStock.value,
    //   };

    //   console.log(payload, '??????');
    //   const newProduct = await addProduct({
    //     variables: {
    //       ...payload,
    //     },
    //   });

    //   if (newProduct) {
    //     const {
    //       data: {
    //         client: {
    //           addProduct: { message },
    //         },
    //       },
    //     } = newProduct;
    //     uiStore.serverMessage = message;
    //     uiStore.snackbarSeverity = 'success';
    //     uiStore.showSnackbar = true;
    //     setSelectedSize([]);
    //     setSelectedTag([]);
    //     setSelectedColor([]);
    //     setSelectedProduct({ value: '', label: '' });
    //     setSelectedStock({ value: '', label: '' });
    //     resetForm();
    //   }
    // } catch (error) {
    //   uiStore.serverMessage = 'An error occured';
    //   uiStore.snackbarSeverity = 'error';
    //   uiStore.showSnackbar = true;
    // }
  };

  const formik = useFormik<{
    productName: string;
    productDescription: string;
    oldPrice: string;
    newPrice: string;
    productCategory: { label: ''; value: '' };
    productSize: { label: ''; value: '' };
    colors: { label: ''; value: '' };
    tags: { label: ''; value: '' };
    stock: { label: ''; value: '' };
  }>({
    initialValues: {
      productName: '',
      productDescription: '',
      oldPrice: '',
      newPrice: '',
      productCategory: { label: '', value: '' },
      productSize: { label: '', value: '' },
      colors: { label: '', value: '' },
      tags: { label: '', value: '' },
      stock: { label: '', value: '' },
    },
    onSubmit: _handleForm,
    validationSchema,
  });
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    errors,
    touched,
    isSubmitting,
    resetForm,
    values: { productName, productDescription, oldPrice, newPrice },
  } = formik;


  function removeImageExtension(filename: string) {
    let lastDotPosition = filename.lastIndexOf('.');
    if (lastDotPosition === -1) return filename;
    else return filename.substr(0, lastDotPosition);
  }

  const handleFileUpload = (e: any) => {
    setIsImage(true);
    if (!e.target.files) return;
    const trimmedImage = removeImageExtension(e.target.files[0].name);
    setImageName(trimmedImage);
    const size = fileSize(e.target.files[0].size);
    setImageSize(size);
    fileUpload({ variables: { file: e.target.files[0] } });
  };

  return (
    <Modal>
      <Box className={classes.wrapper}>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          style={{ marginBottom: '.8em' }}
        >
          <Grid item>
            <Typography variant="subtitle2">Add Product</Typography>
          </Grid>
          <Grid item>
            <IconButton
              size="medium"
              aria-label="Go back"
              onClick={handleCloseModal}
            >
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item sm={6}>
            <Box style={{ border: '1px solid #e5e5ea', padding: '1em' }}>
              <Typography variant="body2">Add Images</Typography>
              <label className={classes.fileUpload}>
                <Image
                  src="/image/empt.png"
                  width={100}
                  objectFit="cover"
                  height={100}
                  alt="file upload"
                />
                <Typography>Click to browse for image</Typography>
                <input
                  type="file"
                  accept="image/jpg, image/jpeg, image/png"
                  onChange={handleFileUpload}
                />
              </label>
              {isImage ? (
                <>
                  <Typography variant="subtitle2">
                    uploading image...
                  </Typography>
                  <LinearProgress />
                </>
              ) : isImage === false && imageUrl === '' ? (
                <Typography variant="body2">No image Uploaded</Typography>
              ) : (
                <Grid
                  className={classes.filePreview}
                  container
                  justify="space-between"
                  alignItems="flex-start"
                >
                  <Grid item sm={10}>
                    <Grid container spacing={1}>
                      <Grid item>
                        <Image
                          src={`${
                            imageUrl
                              ? imageUrl
                              : 'https://via.placeholder.com/40x50'
                          }`}
                          width={40}
                          height={50}
                          quality={100}
                          loading="eager"
                          alt="product preview"
                        />
                      </Grid>
                      <Grid item>
                        <Typography>
                          {imageName.length > 20
                            ? imageName.substring(0, 15) + '...'
                            : imageName}
                        </Typography>
                        <Typography>{imageSize}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item sm={2} style={{ textAlign: 'right' }}>
                    <DeleteOutlinedIcon fontSize="small" />
                  </Grid>
                </Grid>
              )}
            </Box>
          </Grid>
          <Grid item sm={6}>
            <Box style={{ border: '1px solid #e5e5ea', padding: '1em' }}>
              <Grid container spacing={2}>
                <Grid item sm={12}>
                  <TextInput
                    placeholder="Product Name"
                    variant="outlined"
                    fullWidth
                    size="small"
                    color="secondary"
                    name="productName"
                    value={productName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Typography className={classes.error}>
                    {touched.productName &&
                      Boolean(errors.productName) &&
                      'Required'}
                  </Typography>
                </Grid>
                <Grid item sm={12}>
                  <Select
                    options={PRODUCT_CATEGORY}
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    classNamePrefix={'my-custom-react-select1'}
                    placeholder="Product Category"
                    name="productCategory"
                    onChange={(e: any) => {
                      formik.setFieldValue('productCategory', e);
                      // setSelectedProduct({
                      //   label: e.label,
                      //   value: e.value,
                      // });
                      setIsError({ ...isError, productError: false });
                    }}
                    onBlur={handleBlur}
                    theme={(theme) => ({
                      ...theme,
                      colors: {
                        ...theme.colors,
                        neutral50: '#a5a5a5',
                      },
                    })}
                  />
                  <Typography className={classes.error}>
                    {touched.productCategory &&
                      Boolean(errors.productCategory?.label) &&
                      'Required'}
                  </Typography>
                </Grid>
                <Grid item sm={12}>
                  <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={PPRODUCT_SIZES}
                    classNamePrefix={'my-custom-react-select2'}
                    placeholder="Available Size"
                    // value={selectedSize}
                    name="productSize"
                    onChange={(e: any) => {
                      formik.setFieldValue('productSize', e);
                      // setSelectedSize([...e]);
                      setIsError({ ...isError, sizeError: false });
                    }}
                    // onBlur={() => _handleBlur('size')}
                    onBlur={handleBlur}
                    theme={(theme) => ({
                      ...theme,
                      colors: {
                        ...theme.colors,
                        neutral50: '#a5a5a5',
                      },
                    })}
                  />
                  <Typography className={classes.error}>
                    {/* {!selectedSize.length && 'Required'} */}
                    {touched.productSize &&
                      Boolean(errors.productSize?.label) &&
                      'Required'}
                  </Typography>
                </Grid>
                <Grid item sm={12}>
                  <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={COLORS}
                    name="colors"
                    classNamePrefix={'my-custom-react-select3'}
                    placeholder="Available Colors"
                    value={selectedColor}
                    onChange={(e: any) => {
                      formik.setFieldValue('colors', e);
                      setSelectedColor([...e]);
                      setIsError({ ...isError, colorError: false });
                    }}
                    // onBlur={() => _handleBlur('color')}
                    onBlur={handleBlur}
                    theme={(theme) => ({
                      ...theme,
                      colors: {
                        ...theme.colors,
                        neutral50: '#a5a5a5',
                      },
                    })}
                  />
                  <Typography className={classes.error}>
                    {/* {!selectedColor.length && 'Required'} */}
                    {touched.colors &&
                      Boolean(errors.colors?.label) &&
                      'Required'}
                  </Typography>
                </Grid>
                <Grid item sm={6}>
                  <TextInput
                    placeholder="Old Price"
                    variant="outlined"
                    fullWidth
                    size="small"
                    color="secondary"
                    name="oldPrice"
                    value={oldPrice}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    InputProps={{
                      inputComponent: NumberFormatCustom,
                      startAdornment: (
                        <InputAdornment position="start">₦</InputAdornment>
                      ),
                    }}
                    // helperText={touched.oldPrice && errors.oldPrice}
                    // error={touched.oldPrice && Boolean(errors.oldPrice)}
                  />
                  <Typography className={classes.error}>
                    {touched.oldPrice && Boolean(errors.oldPrice) && 'Required'}
                  </Typography>
                </Grid>
                <Grid item sm={6}>
                  <TextInput
                    placeholder="New Price"
                    variant="outlined"
                    fullWidth
                    size="small"
                    color="secondary"
                    name="newPrice"
                    value={newPrice}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    InputProps={{
                      inputComponent: NumberFormatCustom,
                      startAdornment: (
                        <InputAdornment position="start">₦</InputAdornment>
                      ),
                    }}
                    // helperText={touched.newPrice && errors.newPrice}
                    // error={touched.newPrice && Boolean(errors.newPrice)}
                  />
                  <Typography className={classes.error}>
                    {touched.newPrice && Boolean(errors.newPrice) && 'Required'}
                  </Typography>
                </Grid>
                <Grid item sm={12}>
                  <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={PRODUCT_TAGS}
                    classNamePrefix={'my-custom-react-select4'}
                    placeholder="Select Tags"
                    name="tags"
                    value={selectedTag}
                    onChange={(e: any) => {
                      formik.setFieldValue('tags', e);
                      setSelectedTag([...e]);
                      setIsError({ ...isError, tagError: false });
                    }}
                    // onBlur={() => _handleBlur('tag')}
                    onBlur={handleBlur}
                    theme={(theme) => ({
                      ...theme,
                      colors: {
                        ...theme.colors,
                        neutral50: '#a5a5a5',
                      },
                    })}
                  />
                  <Typography className={classes.error}>
                    {/* {!selectedTag.length && 'Required'} */}
                    {touched.tags && Boolean(errors.tags?.label) && 'Required'}
                  </Typography>
                </Grid>
                <Grid item sm={12}>
                  <Select
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    options={PRODUCT_STOCK}
                    placeholder="Stock"
                    // value={selectedStock}
                    name="stock"
                    classNamePrefix={'my-custom-react-select5'}
                    onChange={(e: any) => {
                      formik.setFieldValue('stock', e);
                      // setSelectedStock({ label: e.label, value: e.value });
                      setIsError({ ...isError, stockError: false });
                    }}
                    // onBlur={() => _handleBlur('stock')}
                    onBlur={handleBlur}
                    theme={(theme) => ({
                      ...theme,
                      colors: {
                        ...theme.colors,
                        neutral50: '#a5a5a5',
                      },
                    })}
                  />
                  <Typography className={classes.error}>
                    {/* {!selectedStock.value && 'Required'} */}
                    {touched.stock &&
                      Boolean(errors.stock?.label) &&
                      'Required'}
                  </Typography>
                </Grid>
                <Grid item sm={12}>
                  <TextInput
                    multiline
                    rows={5}
                    placeholder="Description"
                    variant="outlined"
                    fullWidth
                    size="small"
                    color="secondary"
                    name="productDescription"
                    value={productDescription}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // helperText={
                    //   touched.productDescription && errors.productDescription
                    // }
                    // error={
                    //   touched.productDescription &&
                    //   Boolean(errors.productDescription)
                    // }
                  />
                  <Typography className={classes.error}>
                    {touched.productDescription &&
                      Boolean(errors.productDescription) &&
                      'Required'}
                  </Typography>
                  {/* <Typography className={classes.error}>
                    {touched.productDescription &&
                      Boolean(errors.productDescription) &&
                      'Required'}
                  </Typography> */}
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justify="flex-end"
          className={classes.btnAction}
        >
          <Grid item sm={2}>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              disableElevation
              onClick={handleCloseModal}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item sm={2}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              disableElevation
              onClick={handleSubmit}
            >
              {isSubmitting && loading ? (
                <CircularProgress size={25} />
              ) : (
                'Add Product'
              )}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default observer(AddProduct);
