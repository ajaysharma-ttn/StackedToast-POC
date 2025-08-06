import { Pressable, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

// const WINDOW_WIDTH = Dimensions.get('window').width;
const normalize = (size: number) => size; 
const normalizeWidth = (width: number) => width; 
const normalizeHeight = (height: number) => height;
const normalizeFont = (fontSize: number) => fontSize;

export function ReminderToast({text1, text2, onPress}: {text1?: string, text2?: string, onPress: () => void}) {
    return (
      <Pressable onPress={onPress} style={styles.watchListToastContainer}>
        <View style={styles.gradientContainer}>
          <LinearGradient
            colors={["#0E2044", "#0E2044"]}
            style={styles.gradientStyle}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          />
          <LinearGradient
            colors={["#3776B74D", "#3776B700"]}
            style={styles.gradientStyle}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          />
          <LinearGradient
            colors={["#EA018000", "#EA018014"]}
            style={styles.gradientStyle}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 1, y: 0 }}
          />
        </View>
        {text1 ? <Text style={styles.sookaText1}>{text1}</Text> : null}
        {text2 ? <Text style={styles.sookaText2}>{text2}</Text> : null}
      </Pressable>
    );
}

export function WatchListToast({text1, text2}: {text1?: string, text2?: string}) {
    return (
      <View style={styles.watchListToastContainer}>
        <View style={styles.gradientContainer}>
          <LinearGradient
            colors={["#0E2044", "#0E2044"]}
            style={styles.gradientStyle}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          />
          <LinearGradient
            colors={["#3776B74D", "#3776B700"]}
            style={styles.gradientStyle}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          />
          <LinearGradient
            colors={["#EA018000", "#EA018014"]}
            style={styles.gradientStyle}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 1, y: 0 }}
          />
        </View>
        <View style={styles.watchListcontent}>
          {text1 ? <Text style={styles.watchListText1}>{text1}</Text> : null}
          {text2 ? <Text style={styles.watchListText2}>{text2}</Text> : null}
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    gradientContainer: {
    ...StyleSheet.absoluteFillObject,
  },
    gradientStyle: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 7,
  },
  sookaText1: {
    fontSize: normalizeFont(16),
    lineHeight: normalizeHeight(24),
    color: "#F2F2F7",
  },
  sookaText2: {
    fontSize: 14,
    color: '#F2F2F7',
  },
  watchListToastContainer: {
    paddingHorizontal: normalizeWidth(16),
    paddingVertical: normalizeHeight(10),
    borderWidth: normalizeWidth(1),
    borderColor: "#FFFFFF33",
    backgroundColor: 'transparent',
    borderRadius: normalize(8),
  },
  watchListcontent: {
    justifyContent: 'center',
    borderRadius: normalize(8),
  },
  watchListText1: {
    fontSize: normalizeFont(16),
    lineHeight: normalizeHeight(21),
    color: "#EBEBEB",
  },
  watchListText2: {
    fontSize: normalizeFont(14),
    color: "#EBEBEB",
    lineHeight: normalizeHeight(20),
  },
})