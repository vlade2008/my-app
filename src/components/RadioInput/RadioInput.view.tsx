import { View, Text, StyleSheet } from 'react-native';

// import "./RadioInput.css";
// React Native paper for the UI component
import { RadioButton } from 'react-native-paper';

type RadioInputProps = {
  label: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  onSelect: (value: string) => void;
};

const RadioInput = (props: RadioInputProps) => {
  const { label, value, onSelect, checked = false, disabled = false } = props;
  
  // TODO: something is wrong with the input's logic
  return (
    <View style={styles.container}>
      <RadioButton.Android
        value={value}
        status={ checked ? 'checked' : 'unchecked' }
        onPress={(e) => onSelect(value)}
        disabled={disabled}
      />
      <Text>{label}</Text>
      {/* <label>
        <input
          data-testid="radio-input-control"
          type="radio"
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={(e) => onSelect(e.target.value)}
        />
        {label}
      </label> */}
    </View>
  );
};

export default RadioInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
});
