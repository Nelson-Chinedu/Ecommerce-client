import { FunctionComponent, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

interface ChipData {
  key: number;
  label: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: theme.spacing(0.5),
      boxShadow: '0px',
      margin: 0,
      '& .MuiChip-outlined': {
        borderRadius: '5px',
      },
    },
    chip: {
      margin: theme.spacing(0.5),
    },
  })
);

const Index: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const [chipData, setChipData] = useState<ChipData[]>([
    { key: 0, label: 'Sneeker' },
    { key: 1, label: 'Shoe' },
    { key: 2, label: 'Footwear' },
    { key: 3, label: 'Blue' },
    { key: 4, label: 'Stylish' },
    { key: 5, label: 'Nike' },
    { key: 6, label: 'Men' },
    { key: 7, label: 'Men Shoe' },
  ]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  return (
    <Paper component="ul" className={classes.root}>
      {chipData.map((data) => {
        return (
          <li key={data.key}>
            <Chip
              variant="outlined"
              label={data.label}
              onDelete={handleDelete(data)}
              className={classes.chip}
            />
          </li>
        );
      })}
    </Paper>
  );
};

export default Index;
