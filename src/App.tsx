import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { ReminderToast, WatchListToast } from './components/Toasts';
import { toast, Toaster } from 'sonner-native';
import { reminderNotificationData, watchlistNotificationData } from './components/Toasts/MockData';

const MAX_VISIBLE_TOASTS = 3;
const TOAST_SWIPE_DIRECTION = 'left';
const TOAST_POSITION = 'bottom-center';

export default function App() {

  const showNotification = ({type}: {type: 'watchlist-toast' | 'reminder-toast'}) => {
    switch (type) {
      case 'watchlist-toast':
        toast.custom(
          <WatchListToast text1={watchlistNotificationData.title} text2={watchlistNotificationData.description} />,
          {
            unstyled: true,
          }
        );
        break;
      case 'reminder-toast':
        toast.custom(
          <ReminderToast
            text1={reminderNotificationData.title}
            text2={reminderNotificationData.description}
            onPress={() => console.log('Reminder Toast Pressed')}
          />,
          {
            unstyled: true,
          }
        );
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Show Reminder Toast" onPress={() => showNotification({type: 'reminder-toast'})} />
      <Button title="Show Watchlist Toast" onPress={() => showNotification({type: 'watchlist-toast'})} />
      <Toaster
        swipeToDismissDirection={TOAST_SWIPE_DIRECTION}
        visibleToasts={MAX_VISIBLE_TOASTS}
        position={TOAST_POSITION}
        
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
