import React from 'react';
import { Themed, SafeAreaView, ScrollView } from 'react-navigation';
import {
  createStackNavigator,
  NavigationStackProp,
} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Button } from './commonComponents/ButtonWithMargin';
import SampleText from './SampleText';

interface Props {
  navigation: NavigationStackProp;
}

class Home extends React.Component<Props> {
  render() {
    const { navigation } = this.props;

    return (
      <ScrollView style={{ flex: 1 }}>
        <SafeAreaView forceInset={{ horizontal: 'always' }}>
          <SampleText>Home screen</SampleText>
        </SafeAreaView>

        <Button
          onPress={() =>
            navigation.navigate('DetailsScreen', { name: 'Jordan' })
          }
          title="Open details screen"
        />

        <Button
          onPress={() => navigation.navigate('Modal')}
          title="Open modal"
        />

        <Themed.StatusBar />
      </ScrollView>
    );
  }
}

class Details extends React.Component<Props> {
  render() {
    const { navigation } = this.props;

    return (
      <ScrollView style={{ flex: 1 }}>
        <SafeAreaView forceInset={{ horizontal: 'always' }}>
          <SampleText>
            Details screen for {navigation.state.params!.name}
          </SampleText>
        </SafeAreaView>

        <Themed.StatusBar />
      </ScrollView>
    );
  }
}

const HomeTab = createStackNavigator({
  HomeScreen: {
    navigationOptions: {
      title: 'Home',
    },
    screen: Home,
  },
  DetailsScreen: {
    navigationOptions: {
      title: 'Details',
    },
    screen: Details,
  },
});

class Settings extends React.Component<Props> {
  render() {
    const { navigation } = this.props;

    return (
      <ScrollView style={{ flex: 1 }}>
        <SafeAreaView forceInset={{ horizontal: 'always' }}>
          <SampleText>Settings screen</SampleText>
        </SafeAreaView>

        <Button
          onPress={() =>
            navigation.navigate('ProfileSettingsScreen', { name: 'Dan' })
          }
          title="Open profile settings screen"
        />

        <Themed.StatusBar />
      </ScrollView>
    );
  }
}

class Profile extends React.Component<Props> {
  render() {
    const { navigation } = this.props;

    return (
      <ScrollView style={{ flex: 1 }}>
        <SafeAreaView forceInset={{ horizontal: 'always' }}>
          <SampleText>Profile screen</SampleText>
        </SafeAreaView>

        <Button
          onPress={() => navigation.navigate('DetailsScreen', { name: 'Dan' })}
          title="Open details screen"
        />

        <Button
          onPress={() => navigation.navigate('Modal')}
          title="Open modal"
        />

        <Themed.StatusBar />
      </ScrollView>
    );
  }
}

const SettingsTab = createStackNavigator({
  SettingsScreen: {
    navigationOptions: {
      title: 'Settings',
    },
    screen: Settings,
  },
  ProfileSettingsScreen: {
    navigationOptions: {
      title: 'Profile',
    },
    screen: Profile,
  },
});

class Modal extends React.Component<Props> {
  render() {
    const { navigation } = this.props;

    return (
      <ScrollView style={{ flex: 1 }}>
        <SafeAreaView forceInset={{ horizontal: 'always' }}>
          <SampleText>I am modal</SampleText>
        </SafeAreaView>

        <Button
          onPress={() => navigation.navigate('DetailsScreen', { name: 'Dan' })}
          title="Open details screen"
        />

        <Themed.StatusBar />
      </ScrollView>
    );
  }
}

const TabStack = createBottomTabNavigator({
  HomeTab: {
    navigationOptions: {
      tabBarIcon: ({
        tintColor,
        focused,
      }: {
        tintColor: string;
        focused: boolean;
      }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
      tabBarLabel: 'Home',
    },
    screen: HomeTab,
  },
  SettingsTab: {
    navigationOptions: {
      tabBarIcon: ({
        tintColor,
        focused,
      }: {
        tintColor: string;
        focused: boolean;
      }) => (
        <Ionicons
          name={focused ? 'ios-settings' : 'ios-settings'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
      tabBarLabel: 'Settings',
    },
    screen: SettingsTab,
  },
});

const TabStackWithModal = createStackNavigator(
  {
    Main: TabStack,
    Modal: { screen: Modal },
  },
  {
    headerMode: 'none',
    mode: 'modal',
  }
);

export default TabStackWithModal;
