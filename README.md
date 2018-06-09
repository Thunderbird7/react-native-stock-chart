# react-native-stock-chart
A test repository to demonstrate possible bug in victory-native https://github.com/FormidableLabs/victory-native

# Install

1. `npm install`

# Build

To run on simulator

1. `react-native run-ios --simulator="iPhone 6" --configuration Release`

To run on physical device (iOS only)

Follow instructions as listed here in "Building Project with Native Code" section in addition to instructions below:
[https://facebook.github.io/react-native/docs/getting-started.html]

1. Open ios folder in Xcode
2. Connect physical device (iPhone)
3. Product > Device > Your Device
4. Select your personal Apple developer account in "team" section for TestChartApp target
5. Select your personal Apple developer account in "team" section for TestChartAppTests target
6. Select Release build: Product > Scheme > Edit Scheme
  * Run > Build Configuration > Release
  * Test > Build Configuration > Release
  * Analyze > Build Configuration > Release
7. Run & Build: Product > Run

# Error Reproduction

![Behavior on simulator](https://imgur.com/MfsOdVI)

![Behavior on physical device](https://imgur.com/YZBNVAf)

Simply press/hold on chart and pan left and right. Performance on physical device with this application is acceptable but notice how much slower it is relative to simulator. This is also a very very lightweight application which helps with performance. In a more complicated application, especially one which uses redux for cross-component communication, this performance is significantly lower.