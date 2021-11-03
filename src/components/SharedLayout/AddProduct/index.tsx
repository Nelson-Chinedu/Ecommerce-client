import React, { FunctionComponent, useState } from 'react';
import NumberFormat from 'react-number-format';
import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import * as yup from 'yup';
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
import { ADD_PRODUCT } from 'src/queries';

import Snackbar from 'src/components/SharedLayout/Snackbar';
import Modal from 'src/components/SharedLayout/Modal';
import TextInput from 'src/components/SharedLayout/TextInput';
import Button from 'src/components/SharedLayout/Button';
import { useStyles } from 'src/components/SharedLayout/AddProduct/styled.addProduct';

import {
  PPRODUCT_SIZES,
  COLORS,
  PRODUCT_TAGS,
  PRODUCT_STOCK,
  PRODUCT_CATEGORY,
} from 'src/components/constant/product';

const validationSchema = yup.object().shape({
  productName: yup.string().required('Required'),
  productDescription: yup.string().required('Required'),
  // productSizes: yup.string().required('Required'),
  // productCategory: yup.string().required('Required'),
  // colors: yup.string().required('Required'),
  // stock: yup.string().required('Required'),
  oldPrice: yup.number().required('Required'),
  newPrice: yup.number().required('Required'),
  // tags: yup.string().required('Required'),
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

const AddProduct: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const { uiStore } = useStore();
  const [selectedProduct, setSelectedProduct] = useState({
    value: '',
    label: '',
  });
  const [selectedSize, setSelectedSize] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedTag, setSelectedTag] = useState([]);
  const [selectedStock, setSelectedStock] = useState({ value: '', label: '' });
  const [isError, setIsError] = useState({
    productError: false,
    sizeError: false,
    colorError: false,
    tagError: false,
    stockError: false,
  });

  const [addProduct, { loading }] = useMutation(ADD_PRODUCT);

  const handleCloseModal = () => {
    uiStore.toggleModalVisibility();
  };

  const handleClose = (_event: unknown, reason: string) => {
    if (reason === 'clickaway') {
      return;
    }
    uiStore.serverMessage = '';
    uiStore.showSnackbar = false;
  };

  const _handleBlur = (param: string) => {
    if (param === 'product' && selectedProduct.value === '') {
      setIsError({ ...isError, productError: true });
    } else if (param === 'size' && selectedSize.length === 0) {
      setIsError({ ...isError, sizeError: true });
    } else if (param === 'color' && selectedColor.length === 0) {
      setIsError({ ...isError, colorError: true });
    } else if (param === 'tag' && selectedTag.length === 0) {
      setIsError({ ...isError, tagError: true });
    } else if (param === 'stock' && selectedStock.value === '') {
      setIsError({ ...isError, stockError: true });
    }
  };

  const _handleForm = async () => {
    const colors = selectedColor.map((color: { value: string }) => color.value);
    const productSizes = selectedSize.map(
      (size: { value: string }) => size.value
    );
    const tags = selectedTag.map((tag: { value: string }) => tag.value);
    try {
      const payload = {
        colors,
        tags,
        sizes: productSizes,
        name: formik.values.productName,
        description: formik.values.productDescription,
        oldPrice: formik.values.oldPrice,
        newPrice: formik.values.newPrice,
        category: selectedProduct.value,
        stock: selectedStock.value,
      };
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
        setSelectedSize([]);
        setSelectedTag([]);
        setSelectedColor([]);
        setSelectedProduct({ value: '', label: '' });
        setSelectedStock({ value: '', label: '' });
        resetForm();
      }
    } catch (error) {
      uiStore.serverMessage = 'An error occured';
      uiStore.snackbarSeverity = 'error';
      uiStore.showSnackbar = true;
    }
  };

  const formik = useFormik({
    initialValues: {
      productName: '',
      productDescription: '',
      oldPrice: '',
      newPrice: '',
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

  return (
    <React.Fragment>
      <Modal>
        <Box className={classes.root}>
          <Grid
            container
            justify="space-between"
            alignItems="flex-start"
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
                  <Typography>Drop your files or Browse</Typography>
                  <input type="file" />
                </label>
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
                          src="/image/ct-2.jpg"
                          width={40}
                          height={50}
                          alt=""
                        />
                      </Grid>
                      <Grid item>
                        <Typography>Navy Blue Shoe</Typography>
                        <Typography>420 kb</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item sm={2} style={{ textAlign: 'right' }}>
                    <DeleteOutlinedIcon fontSize="small" />
                  </Grid>
                </Grid>
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
                          src="/image/ct-2.jpg"
                          width={40}
                          height={50}
                          alt=""
                        />
                      </Grid>
                      <Grid item>
                        <Typography>Navy Blue Shoe</Typography>
                        <Typography>420 kb</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item sm={2} style={{ textAlign: 'right' }}>
                    <DeleteOutlinedIcon fontSize="small" />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item sm={6}>
              <Box style={{ border: '1px solid #e5e5ea', padding: '1em' }}>
                <Grid container spacing={2}>
                  <Grid item sm={12}>
                    <TextInput
                      label="Product Name"
                      variant="outlined"
                      fullWidth
                      size="small"
                      color="secondary"
                      name="productName"
                      value={productName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={touched.productName && errors.productName}
                      error={touched.productName && Boolean(errors.productName)}
                    />
                  </Grid>
                  <Grid item sm={12}>
                    <Select
                      options={PRODUCT_CATEGORY}
                      closeMenuOnSelect={true}
                      components={animatedComponents}
                      classNamePrefix={'my-custom-react-select1'}
                      placeholder="Product Category"
                      name="productCategory"
                      value={selectedProduct}
                      onChange={(e: any) => {
                        setSelectedProduct({
                          label: e.label,
                          value: e.value,
                        });
                        setIsError({ ...isError, productError: false });
                      }}
                      onBlur={() => _handleBlur('product')}
                    />
                    <Typography className={classes.error}>
                      {!selectedProduct.value && 'Required'}
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
                      value={selectedSize}
                      onChange={(e: any) => {
                        setSelectedSize([...e]);
                        setIsError({ ...isError, sizeError: false });
                      }}
                      onBlur={() => _handleBlur('size')}
                    />
                    <Typography className={classes.error}>
                      {!selectedSize.length && 'Required'}
                    </Typography>
                  </Grid>
                  <Grid item sm={12}>
                    <Select
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      isMulti
                      options={COLORS}
                      classNamePrefix={'my-custom-react-select3'}
                      placeholder="Available Colors"
                      value={selectedColor}
                      onChange={(e: Array<string>) => {
                        setSelectedColor([...e]);
                        setIsError({ ...isError, colorError: false });
                      }}
                      onBlur={() => _handleBlur('color')}
                    />
                    <Typography className={classes.error}>
                      {!selectedColor.length && 'Required'}
                    </Typography>
                  </Grid>
                  <Grid item sm={6}>
                    <TextInput
                      label="Old Price"
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
                          <InputAdornment position="start">-N-</InputAdornment>
                        ),
                      }}
                      helperText={touched.oldPrice && errors.oldPrice}
                      error={touched.oldPrice && Boolean(errors.oldPrice)}
                    />
                  </Grid>
                  <Grid item sm={6}>
                    <TextInput
                      label="New Price"
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
                          <InputAdornment position="start">-N-</InputAdornment>
                        ),
                      }}
                      helperText={touched.newPrice && errors.newPrice}
                      error={touched.newPrice && Boolean(errors.newPrice)}
                    />
                  </Grid>
                  <Grid item sm={12}>
                    <Select
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      isMulti
                      options={PRODUCT_TAGS}
                      classNamePrefix={'my-custom-react-select4'}
                      placeholder="Select Tags"
                      value={selectedTag}
                      onChange={(e: Array<string>) => {
                        setSelectedTag([...e]);
                        setIsError({ ...isError, tagError: false });
                      }}
                      onBlur={() => _handleBlur('tag')}
                    />
                    <Typography className={classes.error}>
                      {!selectedTag.length && 'Required'}
                    </Typography>
                  </Grid>
                  <Grid item sm={12}>
                    <Select
                      closeMenuOnSelect={true}
                      components={animatedComponents}
                      options={PRODUCT_STOCK}
                      placeholder="Stock"
                      value={selectedStock}
                      classNamePrefix={'my-custom-react-select5'}
                      onChange={(e: any) => {
                        setSelectedStock({ label: e.label, value: e.value });
                        setIsError({ ...isError, stockError: false });
                      }}
                      onBlur={() => _handleBlur('stock')}
                    />
                    <Typography className={classes.error}>
                      {!selectedStock.value && 'Required'}
                    </Typography>
                  </Grid>
                  <Grid item sm={12}>
                    <TextInput
                      multiline
                      rows={5}
                      label="Description"
                      variant="outlined"
                      fullWidth
                      size="small"
                      color="secondary"
                      name="productDescription"
                      value={productDescription}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        touched.productDescription && errors.productDescription
                      }
                      error={
                        touched.productDescription &&
                        Boolean(errors.productDescription)
                      }
                    />
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
      {uiStore.serverMessage.length > 1 && (
        <Snackbar
          open={uiStore.serverMessage.length > 1 ? true : false}
          handleClose={handleClose}
          message={uiStore.serverMessage}
          severity="success"
        />
      )}
    </React.Fragment>
  );
};

export default observer(AddProduct);
