import { loadAsync } from 'expo-font';
import { useFonts as useRaleway, Raleway_400Regular } from '@expo-google-fonts/raleway';
import { useFonts as useMulish, Mulish_800ExtraBold } from '@expo-google-fonts/mulish';

const useFonts = async () => {
    await loadAsync({
        Mulish: require(`${Mulish_800ExtraBold}`)
    });
  };
  
  export default useFonts;