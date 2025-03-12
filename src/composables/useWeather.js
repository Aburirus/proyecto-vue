//siempre que se cree un archivo para la carpeta composable se debe usar el 'use' en el nombre

import { useWeatherStore } from "@/stores/weatherStore";
import { getTemperatura } from "./helpers/getWeather";

export const useWeather = async () => {
    const temperatura = await getTemperatura();
    const weatherStore = useWeatherStore();
    weatherStore.temperatura = temperatura;
}