import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import MainMenu from "./screens/MainMenu";
import FoodInfo from "./screens/FoodInfo";
import ASP from "./screens/ASP";
import CommunityPost from "./screens/CommunityPost";
import CommunitySearch from "./screens/CommunitySearch";
import CreateAccount from "./screens/CreateAccount";
import ScanItem from "./screens/ScanItem";
import UserLogin from "./screens/UserLogin";
import UserProfile from "./screens/UserProfile";

const MainStack = createStackNavigator({
  MainMenu: {
    screen: MainMenu
  },
  ASP: {
    screen: ASP,
    navigationOptions: {
      headerTitle: "ASP"
    }
  },
  FoodInfo: {
    screen: FoodInfo,
    navigationOptions: {
      headerTitle: "FoodInfo"
    }
  },
  CommunityPost: {
    screen: CommunityPost,
    navigationOptions: {
      headerTitle: "CommunityPost"
    }
  },
  CommunitySearch: {
    screen: CommunitySearch,
    navigationOptions: {
      headerTitle: "CommunitySearch"
    }
  },
  CreateAccount: {
    screen: CreateAccount,
    navigationOptions: {
      headerTitle: "CreateAccount"
    }
  },
  ScanItem: {
    screen: ScanItem,
    navigationOptions: {
      headerTitle: "ScanItem"
    }
  },
  UserLogin: {
    screen: UserLogin,
    navigationOptions: {
      headerTitle: "UserLogin"
    }
  },
  UserProfile: {
    screen: UserProfile,
    navigationOptions: {
      headerTitle: "UserProfile"
    }
  }
});

export default createAppContainer(MainStack);
