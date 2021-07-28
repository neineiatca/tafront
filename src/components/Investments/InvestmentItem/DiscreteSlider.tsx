import Slider from "@material-ui/core/Slider";

type Props = {
  defaultValue: number;
  updateElement: (newWeight: number, i: number) => void;
  index: number;
};

function valuetext(value: any) {
  return `${value}°C`;
}

export default function DiscreteSlider({
  defaultValue,
  updateElement,
  index,
}: Props) {
  return (
    <div>
      <Slider
        defaultValue={defaultValue}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-small-steps"
        step={1}
        marks
        min={1}
        max={100}
        valueLabelDisplay="auto"
        onChange={(eee: any) => {
          updateElement(parseInt(eee.target.textContent), index);
        }}
      />
    </div>
  );
}
