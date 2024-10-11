-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-02-2016 a las 01:25:56
-- Versión del servidor: 5.6.11
-- Versión de PHP: 5.5.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `empleado`
--
CREATE DATABASE IF NOT EXISTS `empleado` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `empleado`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE IF NOT EXISTS `empleados` (
  `id_emp` int(10) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `apellido` varchar(30) NOT NULL,
  `trabajo` varchar(100) NOT NULL,
  `edad` int(3) NOT NULL,
  `salario` int(5) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id_emp`, `nombre`, `apellido`, `trabajo`, `edad`, `salario`, `email`) VALUES
(1, 'Juan', 'Hagan', 'Programador Senior', 32, 1200, 'juan_hagan@bignet.com'),
(2, 'Gonzalo', 'Pillai', 'Programador Senior', 32, 1100, 'g_pillai@bignet.com'),
(3, 'Ana', 'Dharma', 'Desarrollador Web', 27, 900, 'ana@bignet.com'),
(4, 'Maria', 'Anchor', 'Desarrollador Web', 41, 850, 'mary@bignet.com'),
(5, 'Agustina', 'Fernandez', 'Programador', 31, 750, 'af@bignet.com'),
(6, 'Juan', 'Agüero', 'Programador', 36, 880, 'juan@bignet.com'),
(7, 'Eduardo', 'Sacan', 'Programador', 25, 850, 'eddi@bignet.com'),
(8, 'Alejandra', 'Nanda', 'Programador', 32, 700, 'alenanda@bignet.com'),
(9, 'Hernan', 'Rosso', 'Especialista Multimedia', 33, 900, 'hernan@bignet.com'),
(10, 'Pablo', 'Simon', 'Especialista Multimedia', 43, 1850, 'ps@bignet.com'),
(11, 'Arturo', 'Hernandez', 'Especialista Multimedia', 32, 1750, 'arturo@bignet.com'),
(12, 'Jimena', 'Cazado', 'Diseñador Web Senior', 32, 1100, 'jimena@bignet.com'),
(13, 'Roberto', 'Luis', 'Administrador de Sistemas', 45, 1000, 'roberto@bignet.com'),
(14, 'Daniel', 'Gutierrez', 'Administrador de Sistemas', 34, 9000, 'daniel@bignet.com'),
(15, 'Miguel', 'Harper', 'Ejecutivo de Ventas Senior', 36, 1200, 'miguel@bignet.com'),
(16, 'Monica', 'Sanchez', 'Ejecutivo de Ventas', 30, 1900, 'monica@bignet.com'),
(17, 'Alicia', 'Simlai', 'Ejecutivo de Ventas', 27, 1700, 'alicia@bignet.com'),
(18, 'Jose', 'Iriarte', 'Ejecutivo de Ventas', 27, 1720, 'jose@bignet.com'),
(19, 'Sabrina', 'Allende', 'Gerente de Soporte Tecnico', 32, 2000, 'sabrina@bignet.com'),
(20, 'Pedro', 'Campion', 'Gerente de Finanzas', 36, 2200, 'pedro@bignet.com'),
(21, 'Mariana', 'Dharma', 'Presidente', 38, 3000, 'mariana@bignet.com');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
