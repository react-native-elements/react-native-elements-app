import React, { useState } from 'react';
import { CheckBox, Icon } from 'react-native-elements';
import { Header } from './header';

type CheckboxComponentProps = {};

const CheckboxComponent: React.FunctionComponent<CheckboxComponentProps> = () => {
  const [checked, setChecked] = useState(false);
  const onCheckHandler = () => {
    setChecked(!checked);
  };
  return (
    <>
      <Header title="Checkbox" />
      <CheckBox title="Click Here" checked={checked} onPress={onCheckHandler} />

      <CheckBox
        center
        title="Click Here"
        checked={checked}
        onPress={onCheckHandler}
      />

      <CheckBox
        center
        title="Click Here"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={checked}
        onPress={onCheckHandler}
      />

      <CheckBox
        center
        title={`Click Here to ${checked ? 'Remove' : 'Add'} This Item`}
        iconRight
        iconType="material"
        checkedIcon="clear"
        uncheckedIcon="add"
        checkedColor="red"
        checked={checked}
        onPress={onCheckHandler}
      />

      <CheckBox
        center
        checkedIcon={
          <Icon
            name="radio-button-checked"
            type="material"
            color="green"
            size={25}
            iconStyle={{ marginRight: 10 }}
          />
        }
        uncheckedIcon={
          <Icon
            name="radio-button-unchecked"
            type="material"
            color="grey"
            size={25}
            iconStyle={{ marginRight: 10 }}
          />
        }
        checked={checked}
        onPress={onCheckHandler}
      />
    </>
  );
};

export default CheckboxComponent;
