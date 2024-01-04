import styled from 'styled-components';
import ReactSlider from "react-slider";

const StyledSlider = styled(ReactSlider)`
  height: 100%;
  width: 80px;
`;

const StyledThumb = styled.div`
  height: 8px;
  width: 80px;
  text-align: center;
  background-color: #d7dbe0;
  color: #d7dbe0;
  cursor: grab;
  border-radius: 2px !important;
  border-color: white;
  outline: none;
`;

const Thumb = (props, state) => <StyledThumb {...props}></StyledThumb>;

export interface VerticalSliderProps {
    backgroundActive: string
    backgroundInactive: string
    value: number
    onChange?: (value) => void;
    onChangeEnd?: (value) => void;
}

// Mobile touch does not work correctly
// Fix is documented here: https://github.com/zillow/react-slider/pull/311/files

export default function (props: VerticalSliderProps) {
    const StyledTrack = styled.div`
      top: 0;
      bottom: 0;
      background: ${(props: any) => props.index === 1 ? props.backgroundInactive : props.backgroundActive};
      cursor: ${(props: any) => props.index === 0 ? "grab" : ""};
      border-top-right-radius: 6px !important;
      border-bottom-right-radius: 6px !important;
      width: 80px;
    `;

    const Track = (trackProps, state) => <StyledTrack
        {...trackProps}
        index={state.index}
        backgroundActive={props.backgroundActive}
        backgroundInactive={props.backgroundInactive}
    />;

    return <StyledSlider
        invert
        value={props.value}
        min={0}
        max={255}
        orientation="vertical"
        renderTrack={Track}
        renderThumb={Thumb}
        onChange={props.onChange}
        onAfterChange={props.onChangeEnd}
    />
}
