import { Redirect } from 'expo-router';

export default function HomeScreen() {
  return (
    <Redirect href={'/(auth)/login'}/>
  );
}

