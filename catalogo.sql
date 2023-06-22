-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 22-06-2023 a las 16:40:25
-- Versión del servidor: 5.7.39
-- Versión de PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `catalogo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `idPost` int(10) UNSIGNED DEFAULT NULL,
  `idUsuario` int(10) UNSIGNED DEFAULT NULL,
  `comentario` text,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `idPost`, `idUsuario`, `comentario`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, 1, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 19:56:31', NULL),
(2, 1, 2, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 19:56:31', NULL),
(3, 2, 1, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 19:56:31', NULL),
(4, 3, 4, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 20:07:59', NULL),
(5, 4, 2, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 20:07:59', NULL),
(6, 5, 3, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 20:07:59', NULL),
(7, 4, 2, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 20:07:59', NULL),
(8, 3, 5, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 20:07:59', NULL),
(9, 2, 1, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 20:07:59', NULL),
(10, 1, 3, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 20:07:59', NULL),
(11, 4, 5, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 20:07:59', NULL),
(12, 1, 4, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 20:07:59', NULL),
(13, 2, 3, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 20:07:59', NULL),
(14, 4, 5, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 20:07:59', NULL),
(15, 1, 2, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 20:07:59', NULL),
(16, 2, 3, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 20:07:59', NULL),
(17, 3, 4, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 20:07:59', NULL),
(18, 4, 5, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 20:07:59', NULL),
(19, 5, 4, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 20:07:59', NULL),
(20, 4, 3, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 20:07:59', NULL),
(21, 3, 2, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 20:07:59', NULL),
(22, 2, 1, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 20:07:59', NULL),
(23, 1, 2, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 20:07:59', NULL),
(24, 2, 2, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 20:07:59', NULL),
(25, 3, 4, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 20:07:59', NULL),
(26, 4, 5, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 20:07:59', NULL),
(27, 1, 2, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 20:07:59', NULL),
(28, 3, 4, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 20:07:59', NULL),
(29, 3, 2, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 20:07:59', NULL),
(30, 5, 3, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 20:07:59', NULL),
(31, 1, 4, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 20:07:59', NULL),
(32, 1, 4, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 20:07:59', NULL),
(33, 3, 1, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 20:07:59', NULL),
(34, 1, 2, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 20:07:59', NULL),
(35, 4, 2, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 20:07:59', NULL),
(36, 1, 5, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 20:07:59', NULL),
(37, 1, 2, 'excelente producto', '2023-06-06 11:55:51', '2023-06-09 20:07:59', NULL),
(38, 16, 22, 'hola', '2023-06-14 02:28:10', '2023-06-14 02:28:10', NULL),
(39, 13, 22, 'hola', '2023-06-15 00:43:32', '2023-06-15 00:43:32', NULL),
(40, 1, 10, 'hola', '2023-06-15 20:59:54', '2023-06-15 20:59:54', NULL),
(41, 11, 10, 'hola', '2023-06-15 21:01:35', '2023-06-15 21:01:35', NULL),
(42, 17, 11, 'silla', '2023-06-16 02:54:53', '2023-06-16 02:54:53', NULL),
(43, 11, 14, 'hola', '2023-06-16 13:18:47', '2023-06-16 13:18:47', NULL),
(44, 16, 16, 'hola', '2023-06-16 14:21:25', '2023-06-16 14:21:25', NULL),
(45, 20, 16, 'hola', '2023-06-16 14:28:29', '2023-06-16 14:28:29', NULL),
(46, 23, 30, 'hola', '2023-06-16 21:26:54', '2023-06-16 21:26:54', NULL),
(47, 23, 30, 'hola', '2023-06-16 21:27:00', '2023-06-16 21:27:00', NULL),
(48, 23, 30, 'hola', '2023-06-16 21:53:55', '2023-06-16 21:53:55', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `userId` int(10) UNSIGNED DEFAULT NULL,
  `nombreProducto` varchar(200) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `userId`, `nombreProducto`, `descripcion`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, 'Manta Norwegian', 'Manta de 50x70', '2023-06-06 11:55:51', '2023-06-06 11:55:51', NULL),
(2, 2, 'Termo', 'Termo para mate', '2023-06-06 11:55:51', '2023-06-06 11:55:51', NULL),
(3, 3, 'Almohadon', 'Almohadon', '2023-06-06 11:55:51', '2023-06-06 11:55:51', NULL),
(4, 4, 'Mesa', 'Mesa de comedor', '2023-06-06 11:55:51', '2023-06-06 11:55:51', NULL),
(5, 5, 'Silla', 'Silla de comedor', '2023-06-06 11:55:51', '2023-06-06 11:55:51', NULL),
(6, 1, 'Sillon', 'Sillon para living', '2023-06-06 11:55:51', '2023-06-06 11:55:51', NULL),
(7, 2, 'Cama', 'Cama de 2 plazas', '2023-06-06 11:55:51', '2023-06-06 11:55:51', NULL),
(8, 3, 'Mesa ratona', 'Mesa ratona para lampara', '2023-06-06 11:55:51', '2023-06-06 11:55:51', NULL),
(9, 4, 'Lampara', 'Lampara de mesa', '2023-06-06 11:55:51', '2023-06-06 11:55:51', NULL),
(10, 5, 'Mantel', 'Mantel para mesa de comedor', '2023-06-06 11:55:51', '2023-06-06 11:55:51', NULL),
(11, 19, 'termo', 'termo', '2023-06-11 23:19:24', '2023-06-11 23:19:24', NULL),
(12, 19, '', '', '2023-06-11 23:21:41', '2023-06-11 23:21:41', NULL),
(13, 10, 'termo', 'edqwde', '2023-06-11 23:48:16', '2023-06-11 23:48:16', NULL),
(14, 10, 'guitarra', 'guitarra', '2023-06-13 01:15:25', '2023-06-15 21:06:17', NULL),
(15, 22, 'almohada', 'almoahada', '2023-06-14 02:27:54', '2023-06-14 02:27:54', NULL),
(16, 22, 'silla', 'iuhih', '2023-06-14 02:28:04', '2023-06-14 02:28:04', NULL),
(17, 11, 'silla', 'silla', '2023-06-16 02:54:45', '2023-06-16 02:54:45', NULL),
(20, 16, 'manta', 'manta', '2023-06-16 14:28:17', '2023-06-16 14:44:57', NULL),
(21, 27, 'zapatilla', 'zapatilla', '2023-06-16 18:03:56', '2023-06-16 18:04:27', NULL),
(23, 30, 'kldmalakdms', 'lkmals', '2023-06-16 21:26:50', '2023-06-16 21:54:02', NULL),
(24, 31, 'cama', 'cama', '2023-06-17 11:41:14', '2023-06-17 11:41:42', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(150) NOT NULL,
  `contrasenia` varchar(500) NOT NULL,
  `fotoPerfil` varchar(200) NOT NULL,
  `fecha` date NOT NULL,
  `dni` int(10) UNSIGNED NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `contrasenia`, `fotoPerfil`, `fecha`, `dni`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'manuel@gmail.com', 'hola123', '/images/users/default_pfp.png', '2001-03-01', 45005986, '2023-06-06 11:55:51', '2023-06-06 11:55:51', NULL),
(2, 'gajertali@gmail.com', 'hola', '/images/users/default_pfp.png', '2003-04-02', 47009876, '2023-06-06 11:55:51', '2023-06-06 11:55:51', NULL),
(3, 'caserpe@gmail.com', 'caro123', '/images/users/default_pfp.png', '2005-12-05', 458970654, '2023-06-06 11:55:51', '2023-06-06 11:55:51', NULL),
(4, 'aguscagnoli@gmail.com', 'agus123', '/images/users/default_pfp.png', '2007-09-24', 48004567, '2023-06-06 11:55:51', '2023-06-06 11:55:51', NULL),
(5, 'lucia@gmail.com', 'luli123', '/images/users/default_pfp.png', '2002-07-30', 49876545, '2023-06-06 11:55:51', '2023-06-06 11:55:51', NULL),
(6, 'luis@navasc.com', '$2a$10$/0Yxb9AMmk2EV6auxvDlou0vW/zNozdWpp2GETlWjRNZc3yLVjHnq', 'sdfsedfsd', '2023-06-01', 2344555666, '2023-06-09 22:25:15', '2023-06-09 22:25:15', NULL),
(7, 'fijwdfje@kjdnlkd', '$2a$10$7jMbNGosViSIAIJXtBm76.GbQCo3hhtZXLIiWBuuJUJz2..Tdg83m', '3wcdcs', '2023-06-10', 93219, '2023-06-09 22:27:37', '2023-06-09 22:27:37', NULL),
(8, 'manuel@gmail.com', '$2a$10$F1rCzZjI/XY8DK859Wthx.h4iGZF4AMDo.0f8Hc6djC/bTt48CevS', '2``33`', '2023-06-16', 13213, '2023-06-10 00:30:48', '2023-06-10 00:30:48', NULL),
(9, 'manuel@gmail.com', '$2a$10$eeqjnqatQRSuxNUOPvj9LuFYYKiSn6UVK5/oXWhnpPLxkem02.qaK', '213213', '2023-06-16', 123132, '2023-06-10 00:31:08', '2023-06-10 00:31:08', NULL),
(10, 'lo@gmail.com', '$2a$10$61pNiIo9./i.fpqi1n9fBuq2lml4j6/2z9ut.MLWw8zFp90dKUNqa', 'lo', '2023-06-24', 123, '2023-06-10 15:57:49', '2023-06-15 21:10:12', NULL),
(11, 'lolo@gmail.com', '$2a$10$rIs27.uxpU8vtPApOlmG2eXk2nHwM4Nrp.1eU5wvx5UzLZSW1vjg.', 'lolo', '2023-06-23', 3212, '2023-06-10 16:07:34', '2023-06-16 02:54:05', NULL),
(12, 'dlwemdwmq@jewndj', '$2a$10$7lcENfMSvWcrL4rYr1l7QuN1odgq5fT4SfL7ICXxow.VhNUDktKEW', 'lkdmfdlkmf', '2023-06-18', 34033, '2023-06-10 16:20:57', '2023-06-10 16:20:57', NULL),
(13, 'jojo@gmail.com', '$2a$10$ris5I7N4bFpwJu74vy5hqu5bZgJLeeISv3p3eBT58/CCf/zUYZDI6', 'jojo', '2023-06-10', 12321, '2023-06-10 16:21:48', '2023-06-16 03:23:37', NULL),
(14, 'po@gmail.com', '$2a$10$n0sBvHU7KHqjO5mJccAux.OpY8a./t3K9mOcxFGCTOzIKgDBgHYlu', 'po', '2023-06-22', 123, '2023-06-10 18:02:23', '2023-06-16 14:17:24', NULL),
(15, 'klweedj@jldjsc', '$2a$10$0wc.8Q5U73lXFKmgWpu7w.6MRC73ZZqCWPB3YHD5WZ5kvJd8gJOMG', ',mnscdlk', '2023-06-23', 3213213, '2023-06-10 20:07:54', '2023-06-10 20:07:54', NULL),
(16, 'agus@gmail.com', '$2a$10$AtBXzJpTRbPn3a5Y./B9le.yvdBNHHYTDZokUlvf/2PRDqAViGn6C', 'agus', '2023-06-22', 897987098, '2023-06-11 15:02:19', '2023-06-16 14:53:47', NULL),
(17, 'jfoeijfewoj@kjsdckj', '$2a$10$NdQIThZ2HtqkOjYyZzD4s.rGcxNwD98gyvVAl8I3uRJpEO54oC91a', 'k;mfd;sm', '2023-06-18', 3493204, '2023-06-11 15:05:57', '2023-06-11 15:05:57', NULL),
(18, 'holi@gmail.com', '$2a$10$QM2Vlu3ri0jouHoxW6oFK.Wxoje4Yby3ZMxovf20lqmlo/5vr2bO.', 'kdmwlksdm', '2023-06-01', 11039123, '2023-06-11 17:55:23', '2023-06-11 17:55:23', NULL),
(19, 'mlkmslkmsd@kdlkjdw', '$2a$10$dwzK0umBjL7TGUpSKAlB4eJ7gKd.2Q4l77RZuKa2jCnAJ.vAjsaRi', 'lkdmlkmav', '2023-06-17', 9320934, '2023-06-11 23:18:53', '2023-06-11 23:18:53', NULL),
(21, 'catalina@gmail.com', '$2a$10$RJmYBMOlk/v1qGmX2IvhR.Oq3H4/LR4Jp1x0Bo6yYe/y569u7qjMq', 'mnc,dsan', '2023-06-20', 21921, '2023-06-14 01:03:25', '2023-06-14 01:03:25', NULL),
(22, 'gasti@gmail.com', '$2a$10$ixg1VOVHcw01lP6Cyi.pROfeJkpZFFLAB0LUyJAqz6vHN1TdwMgyK', '09809797', '2023-06-23', 897987098, '2023-06-14 02:26:44', '2023-06-14 02:26:44', NULL),
(23, 'hey@gmail.com', '$2a$10$mCUT4X4SRwJMlwHgiwl1nesaZn8um/S81HRv4gOadRntyG9ZuBNMK', 'hey', '2023-06-30', 123, '2023-06-16 03:54:16', '2023-06-16 03:54:37', NULL),
(24, 'palo@gmail.com', '$2a$10$hstc4yKt0GTAgz3xV8bcj.P54kvIwu9H56hNkKi8RwXiFq3pQmtmG', 'palo', '2023-06-09', 123, '2023-06-16 03:56:59', '2023-06-16 03:57:56', NULL),
(25, 'hola@gmail.com', '$2a$10$vnmlO8SeKJFNBt4KydMunuzBtJ6FZmnn5Jqq0ApV3/HKnOVl.x30C', 'hola', '2023-06-23', 123, '2023-06-16 14:18:14', '2023-06-16 14:18:43', NULL),
(26, 'm@gmail.com', '$2a$10$7nmhMekhgAt7vsOCbqxhTe3wCJYKIiYpWbYbcgl6C09KBJWMrqUD2', 'dwqd', '2023-06-24', 123, '2023-06-16 14:33:20', '2023-06-16 14:33:20', NULL),
(27, 'no@gmail.com', '$2a$10$8nQ/QRYl1Jr82CRdDysnFe7imz9AgJNKzapuzwjzFGPObUZX8olKG', 'no', '2023-06-15', 123, '2023-06-16 18:03:39', '2023-06-16 18:05:27', NULL),
(28, 'ale123@gmail.com', '$2a$10$UdAGBVyf2by4UsK7wbvepeJakMCIYlYVMiFyAD6n5gMDZ3HnWYVNi', '123', '2023-06-29', 123, '2023-06-16 18:07:13', '2023-06-16 18:09:03', NULL),
(29, 'uri123@gmail.com', '$2a$10$dEqUxovf8ATNcm47j6Dmx.pUYdi.kdE3VJ3F.TGUjxmmfIWlhVch2', '12', '2023-06-22', 123, '2023-06-16 18:12:03', '2023-06-16 18:12:36', NULL),
(30, 'talii@gmail.com', '$2a$10$u.LSoEDp8KvX5zEL0zSDAerM7SNVFZXF5dQaUBnI.JA4KMniCXOKW', '123', '2023-06-22', 123, '2023-06-16 19:51:57', '2023-06-16 22:04:26', NULL),
(31, 'uriel@gmail.com', '$2a$10$LDi5Tyi4IJBGrGq3q02wcuDbNIQIc4bSbb21nTbqGVmCzaEXERaBy', '', '2023-06-23', 123, '2023-06-17 11:39:38', '2023-06-17 11:39:38', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idPost` (`idPost`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`idPost`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
