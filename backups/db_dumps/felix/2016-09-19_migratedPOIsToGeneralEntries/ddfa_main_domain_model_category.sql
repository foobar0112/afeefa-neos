-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Erstellungszeit: 19. Sep 2016 um 14:22
-- Server Version: 5.6.21
-- PHP-Version: 5.6.3

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Datenbank: `afeefa_neos_new`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `ddfa_main_domain_model_category`
--

CREATE TABLE IF NOT EXISTS `ddfa_main_domain_model_category` (
  `persistence_object_identifier` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `entry_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `locale` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `type` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Daten für Tabelle `ddfa_main_domain_model_category`
--

INSERT INTO `ddfa_main_domain_model_category` (`persistence_object_identifier`, `entry_id`, `locale`, `name`, `description`, `type`, `created`, `updated`) VALUES
('010cfae4-7506-425b-ba37-80e8d83427f0', '', '', 'general', '', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('07f88130-7d98-4a20-bbb8-d0d98f55c553', '55701e6a33160', 'de', 'community', '', 1, '2015-06-04 11:46:18', '2015-06-04 11:46:18'),
('5dddf63d-ccf6-44e2-8daf-81bb44507fdd', '55701e31bc4ef', 'de', 'language', '', 1, '2015-06-04 11:45:21', '2015-06-04 11:45:21'),
('744f41e9-799c-432b-a9a3-e78d471ec51a', '55701e5f83ba7', 'de', 'donation', '', 1, '2015-06-04 11:46:07', '2015-06-04 11:46:07'),
('adfb2457-819c-4574-ace1-56f5b38d8f96', '556e2704b4e91', 'de', 'leisure', '', 1, '2015-06-02 23:58:28', '2015-06-02 23:58:28'),
('d29bbe86-ecd6-42df-8054-70a90ec7b535', '55701e3a1dee3', 'de', 'jobs', '', 1, '2015-06-04 11:45:30', '2015-06-04 11:45:30'),
('df402493-f467-4472-8b98-9038d2ac967e', '55701e1d724b7', 'de', 'consultation', '', 1, '2015-06-04 11:45:01', '2015-06-04 11:45:01'),
('fa815876-ad1d-433e-87ff-8de20639e2b1', '55701e2712c4c', 'de', 'medic', '', 1, '2015-06-04 11:45:11', '2015-06-04 11:45:11');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `ddfa_main_domain_model_category`
--
ALTER TABLE `ddfa_main_domain_model_category`
 ADD PRIMARY KEY (`persistence_object_identifier`);
SET FOREIGN_KEY_CHECKS=1;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
