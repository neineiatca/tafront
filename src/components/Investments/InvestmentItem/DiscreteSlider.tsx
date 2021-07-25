
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value: any) {
  return `${value}°C`;
}

export default function DiscreteSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        defaultValue={50}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-small-steps"
        step={1}
        marks
        min={1}
        max={100}
        valueLabelDisplay="auto"
        onChange={(eee) => {
          // for debug
          console.log(eee);
        }}
      />
    </div>
  );
}