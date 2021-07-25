import Slider from "@material-ui/core/Slider";

function valuetext(value: any) {
  return `${value}°C`;
}

export default function DiscreteSlider() {
  return (
    <div>
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
