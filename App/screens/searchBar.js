import React from "react";
import { FlatList, Text, View } from "react-native";

import { SearchBar } from "../components/SearchBar";
import { SearchItem } from "../components/List";
import { getIngredients } from "../util/LocalStorage";
import { addIngredients } from "../util/LocalStorage";

// ///////////////////////////////////////////////////////////////////
// React class is created because we need access to state and will
// have dynamic data.
// ///////////////////////////////////////////////////////////////////

class UserProfile extends React.Component {
  // State (a React thing) - essentially the "instance variables" of this class
  state = {
    ingredients: "",
    ingredientsList: []
  };

  // React lifecycle method (override) for when screen is being mounted or updated
  // This method is calling the getIngredients() method to load recent search items
  // (from the phone's storage) into this screen's state
  componentDidMount() {
    getIngredients().then(ingredientsList => {
      this.setState({ ingredientsList });
    });
  }

  storeIngredients = () =>
    addIngredients({
      ingredients: this.state.ingredients
    });

  // props.navigation.navigate("MainMenu");

  // React lifecycle method (override) for when screen is being mounted or updated
  render() {
    // The actual JSX to return/display
    return (
      // "item" refers to each item in this.state.ingredientsList array []
      <FlatList
        data={this.state.ingredientsList}
        renderItem={({ item }) => <SearchItem name={item.ingredients} />}
        keyExtractor={item => item.ingredients.toString()}
        // The header of each component is composed of the search bar and
        // the word "Recents"....THEN follows each item below
        ListHeaderComponent={
          <View>
            <SearchBar
              onSearch={() => this.storeIngredients()}
              searchButtonEnabled={this.state.ingredients.length >= 1}
              placeholder="Enter ingredients"
              onChangeText={ingredients => this.setState({ ingredients })}
            />
            <Text
              style={{
                marginHorizontal: 10,
                fontSize: 16,
                color: "#aaa",
                marginTop: 10,
                marginBottom: 5
              }}
            >
              Blacklisted Ingredients
            </Text>
          </View>
        }
      />
    );
  }
}

export default UserProfile;
