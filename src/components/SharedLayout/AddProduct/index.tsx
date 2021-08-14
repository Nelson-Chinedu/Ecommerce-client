import { FunctionComponent } from 'react';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

import { useStore } from 'src/store';

import Modal from 'src/components/SharedLayout/Modal';
import TextInput from 'src/components/SharedLayout/TextInput';
import Chip from 'src/components/SharedLayout/Chip';
import Button from 'src/components/SharedLayout/Button';
import { useStyles } from 'src/components/SharedLayout/AddProduct/styled.addProduct';

const AddProduct: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const { uiStore } = useStore();

  const handleCloseModal = () => {
    uiStore.toggleModalVisibility();
  };

  return (
    <Modal>
      <Box className={classes.root}>
        <Typography variant="subtitle2">Add Product</Typography>
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
                  />
                </Grid>
                <Grid item sm={12}>
                  <TextInput
                    label="Category"
                    variant="outlined"
                    fullWidth
                    size="small"
                    color="secondary"
                  />
                </Grid>
                <Grid item sm={12}>
                  <TextInput
                    label="Sub Category"
                    variant="outlined"
                    fullWidth
                    size="small"
                    color="secondary"
                  />
                </Grid>
                <Grid item sm={12}>
                  <TextInput
                    label="Price"
                    variant="outlined"
                    fullWidth
                    size="small"
                    color="secondary"
                  />
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
                  />
                </Grid>
                <Grid item sm={12}>
                  <Typography variant="body2">Tags</Typography>
                  <Box className={classes.tag}>
                    <Chip />
                  </Box>
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
            >
              Add Product
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default observer(AddProduct);
