-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 01, 2024 at 02:40 PM
-- Server version: 5.7.24
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `medrecsys`
--

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `ID` int(11) NOT NULL,
  `FIRST_NAME` varchar(256) NOT NULL,
  `LAST_NAME` varchar(256) NOT NULL,
  `EMAIL` varchar(256) NOT NULL,
  `PASSWORD` varchar(256) NOT NULL,
  `ROLE` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`ID`, `FIRST_NAME`, `LAST_NAME`, `EMAIL`, `PASSWORD`, `ROLE`) VALUES
(1, 'Admin', 'Admin', 'admin@admin.com', '$2a$13$KvLXxb7kp/kkSYNuJY1pEeBolAduf19rsYjpZgJLAUiynUYD6eseS', 'A'),
(2, 'tim', 'smith', 'tsmith@test.com', '$2a$13$IHbpju1aUdOABvON0oAi1u5JsM1igErZi33M.zzTQ7G81FTxQsGOG', 'E'),
(3, 'John', 'Doe', 'jdoe@test.com', '$2a$13$N6QRSL48J4KAkDCjRwzpweVCopFsZ47F7wvYgmqM67pkqtSAY6q1G', 'P');

-- --------------------------------------------------------

--
-- Table structure for table `records`
--

CREATE TABLE `records` (
  `ID` int(11) NOT NULL,
  `RECORD_ID` int(11) NOT NULL,
  `HEIGHT_FEET` int(2) NOT NULL,
  `HEIGHT_INCH` int(3) NOT NULL,
  `WEIGHT` int(4) NOT NULL,
  `SEX` varchar(10) NOT NULL,
  `AGE` int(3) NOT NULL,
  `DOB` varchar(10) NOT NULL,
  `ADDRESS` varchar(256) NOT NULL,
  `CITY` varchar(256) NOT NULL,
  `STATE` varchar(2) NOT NULL,
  `ZIP` int(11) NOT NULL,
  `NOTES` text,
  `HISTORY` text,
  `TEST_RESULTS` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `records`
--

INSERT INTO `records` (`ID`, `RECORD_ID`, `HEIGHT_FEET`, `HEIGHT_INCH`, `WEIGHT`, `SEX`, `AGE`, `DOB`, `ADDRESS`, `CITY`, `STATE`, `ZIP`, `NOTES`, `HISTORY`, `TEST_RESULTS`) VALUES
(1, 3, 5, 10, 156, 'Male', 43, '1980-10-02', '123 test road', 'test town', 'MI', 12345, 'Some notes about nothing', 'Doesn\'t have any medical history.', 'None');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `records`
--
ALTER TABLE `records`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `records`
--
ALTER TABLE `records`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
