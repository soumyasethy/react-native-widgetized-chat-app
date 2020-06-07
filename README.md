![alt text](https://github.com/soumyasethy/epifi-assignment/blob/master/screenshots/ios-gif.gif)
![alt text](https://github.com/soumyasethy/epifi-assignment/blob/master/screenshots/android.gif)
# EpiFi Assignment in React Native

## _Features_

- Built with `react-native v0.62.2(latest)`
- Completely Widgetization Flow built with JSON ("EpiFi/src/data/dataSource.ts")
- Used MobX for state management along with HOC, Hooks, Stateless Components.
- Responsive Screen
- Splash screen with logo Android & iOS


## _Getting started_
### Installing Dependency
```
1. yarn or npm i
2. cd ios
3. pod install
4. cd ..
```
### Running Android App in Debug Mode
```
yarn android or npx react-native run-android 
```
### Running iOS App in Debug Mode
```
yarn ios or npx react-native run-ios 
```
### if you face unable to connect development server error in Android while running in Dev Mode
```
yarn android-reverse-tcp
````

## Running Android in Release Build
### Generate .apk file
```
1. cd andorid
2. ./gradlew assembleRelease

```
### Generate Bundle file
```
1. cd andorid
2. ./gradlew bundleRelease
```
### To Test Bundle file
```
1. cd ..
2. npx react-native run-android --variant=release
```

## Running iOS App in Release Build
```
1. Xcode -> product -> Scheme -> Edit Scheme -> Change Build Configuration Relase -> connect your phone & Run
```

