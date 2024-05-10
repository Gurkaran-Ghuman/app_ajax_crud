-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 10, 2024 at 07:06 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `app_ajax_crud`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `f_name` varchar(255) DEFAULT NULL,
  `l_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `pass` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `is_active` int NOT NULL DEFAULT '1',
  `created_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `f_name`, `l_name`, `email`, `pass`, `phone`, `address`, `is_active`, `created_date`) VALUES
(112, 'gjchjv', 'vhjv', 'hvjv@jkvdh.com', 'jv', 'jv', 'bbui', 1, '2024-05-10 10:45:52'),
(113, 'gjchjv', 'vhjv', 'hvjv@jkvdh.com', 'jv', 'jv', 'bbui', 0, '2024-05-10 10:45:52'),
(114, 'gjchjv', 'vhjv', 'hvjv@jkvdh.com', 'jv', 'jv', 'bbui', 0, '2024-05-10 11:13:13'),
(115, 'gjchjv', 'vhjv', 'hvjv@jkvdh.com', 'jv', 'jv', 'bbui', 0, '2024-05-10 11:13:14'),
(116, 'gjchjv', 'vhjv', 'hvjv@jkvdh.com', 'jv', 'jv', 'bbui', 1, '2024-05-10 11:13:14'),
(117, 'gjchjv', 'vhjv', 'hvjv@jkvdh.com', 'jv', 'jv', 'bbui', 0, '2024-05-10 11:13:14'),
(118, 'gjchjv', 'vhjv', 'hvjv@jkvdh.com', 'jv', 'jv', 'bbui', 1, '2024-05-10 11:13:14'),
(119, 'gjchjv', 'vhjv', 'hvjv@jkvdh.com', 'jv', 'jv', 'bbui', 1, '2024-05-10 11:13:14'),
(120, 'gjchjv', 'vhjv', 'hvjv@jkvdh.com', 'jv', 'jv', 'bbui', 0, '2024-05-10 11:13:14'),
(121, 'gjchjv', 'vhjv', 'hvjv@jkvdh.com', 'jv', 'jv', 'bbui', 1, '2024-05-10 11:13:14'),
(122, 'gjchjv', 'vhjv', 'hvjv@jkvdh.com', 'jv', 'jv', 'bbui', 1, '2024-05-10 11:13:15'),
(123, 'gjchjv', 'vhjv', 'hvjv@jkvdh.com', 'jv', 'jv', 'bbui', 1, '2024-05-10 11:13:15');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=124;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
