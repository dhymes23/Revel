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
import CreatePost from "./screens/CreatePost";

const MainStack = createStackNavigator({
  UserLogin: {
    screen: UserLogin,
    navigationOptions: {
      headerTitle: "User Login"
    }
  },
  MainMenu: {
    screen: MainMenu,
    navigationOptions: {
      headerTitle: "Main Menu",
      headerLeft: () => {
        return null;
      }
    }
  },
  CreatePost: {
    screen: CreatePost,
    navigationOptions: {
      headerTitle: "Create Post"
    }
  },
  ASP: {
    screen: ASP,
    navigationOptions: {
      headerTitle: "Preferences"
    }
  },
  FoodInfo: {
    screen: FoodInfo,
    navigationOptions: {
      headerTitle: "Food Info"
    }
  },
  CommunityPost: {
    screen: CommunityPost,
    navigationOptions: {
      headerTitle: "Community Post"
    }
  },
  CommunitySearch: {
    screen: CommunitySearch,
    navigationOptions: {
      headerTitle: "Community Posts"
    }
  },
  CreateAccount: {
    screen: CreateAccount,
    navigationOptions: {
      headerTitle: "Create Account"
    }
  },
  ScanItem: {
    screen: ScanItem,
    navigationOptions: {
      headerTitle: "Scan Item"
    }
  },

  UserProfile: {
    screen: UserProfile,
    navigationOptions: {
      headerTitle: "Preferences Search"
    }
  }
});

export default createAppContainer(MainStack);
