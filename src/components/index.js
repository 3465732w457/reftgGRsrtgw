// Barrel file: export only used components for clean imports in App.
import { BallCanvas } from './canvas';
import Hero from "./Hero";
import Navbar from "./Navbar";
import Tariffs from "./Tariffs";      // импорт тарифов
import Tech from "./Tech";
import AboutUs from "./AboutUs";      // карточки о нас
import CanvasLoader from "./Loader";

export {
  Hero,
  Navbar,
  Tariffs,
  Tech,
  AboutUs,
  CanvasLoader,
  BallCanvas,
};