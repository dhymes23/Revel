// Screen for searching through the community
import * as React from "react";
import { View } from "react-native";
import { Button, Paragraph, Menu, Provider } from "react-native-paper";

class CommunitySearch extends React.Component {
  state = {
    visible: false
  };

  _openMenu = () => this.setState({ visible: true });

  _closeMenu = () => this.setState({ visible: false });

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Provider>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end"
          }}
        >
          <Menu
            visible={this.state.visible}
            onDismiss={this._closeMenu}
            anchor={<Button onPress={this._openMenu}>Menu</Button>}
          >
            <Menu.Item
              onPress={() => {
                return navigate("ASP");
              }}
              title="ASP"
            />
            <Menu.Item
              onPress={() => {
                return navigate("CommunitySearch");
              }}
              title="Community"
            />
            <Menu.Item
              onPress={() => {
                return navigate("ScanItem");
              }}
              title="Scan Item"
            />
            <Menu.Item
              onPress={() => {
                return navigate("UserProfile");
              }}
              title="Profile"
            />
            <Menu.Item
              onPress={() => {
                return navigate("UserLogin");
              }}
              title="Sign Out"
            />
          </Menu>
        </View>
      </Provider>
    );
  }
}
export default CommunitySearch;
