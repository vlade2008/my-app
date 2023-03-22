import React, { useMemo, useReducer } from "react";
import { View, Text } from 'react-native';
import { Divider, Button } from 'react-native-paper';
import RadioInput from "../../components/RadioInput";
import { CreateOrderProps } from "./CreateOrder.props";

const CreateOrderView = (props: CreateOrderProps) => {
  const { items, rules } = props;

  type SelectedItems = Record<number, string>;
  const [selectedItems, updateSelectedItems] = useReducer(
    (state: SelectedItems, newState: SelectedItems) => {
      // TODO: Merge selectedItems state with newState
      state = {
        ...state,
        ...newState,
      };
      return state;
    },
    {
      0: "",
      1: "",
      2: "",
    } as SelectedItems
  );

  const isSelected = (id: string, groupIndex: number) => {
    return id === selectedItems[groupIndex];
  };

  const blacklist: number[] = useMemo(() => {
    // TODO: Create a blacklist based on rules and currently selected items
    return Object.values(selectedItems).reduce((acc: number[], curr) => {
      const ruleVal = rules?.[parseInt(curr)];
      if (ruleVal) {
        acc = [...acc, ...ruleVal];
      }
      return acc;
    }, []);
  }, [rules, selectedItems]);

  const isDisabled = (id: string) => {
    return blacklist.includes(+id);
  };

  const handleSelection = (value: string, groupIndex: number) => {
    updateSelectedItems({
      [groupIndex]: value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(selectedItems);
  };

  // TODO: If no items are available, show a "Loading..." text

  if (!items.length) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      {/* Element form is not reconginzed in react native */}
      {/* <form onSubmit={handleSubmit}> */}
        {items.map((group, groupIndex) => {
          return (
            <View key={groupIndex}>
              {group.map((item) => {
                // TODO: Should render RadioInput component
                return (
                  <View key={item.id}>
                    <RadioInput
                      label={item.value}
                      value={item.id}
                      checked={isSelected(item.id, groupIndex)}
                      disabled={isDisabled(item.id)}
                      onSelect={(itm) => handleSelection(itm, groupIndex)}
                    />
                  </View>
                );
              })}
              <Divider />
            </View>
          );
        })}
        <Button icon="send" mode="contained" onPress={(e) => handleSubmit(e)}>
          Submit
        </Button>
      {/* </form> */}
    </View>
  );
};

export default CreateOrderView;
