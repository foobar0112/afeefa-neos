-- phpMyAdmin SQL Dump
-- version 4.2.13.2
-- http://www.phpmyadmin.net
--
-- Host: db1118.mydbserver.com
-- Erstellungszeit: 15. Jun 2015 um 11:50
-- Server Version: 5.5.28
-- PHP-Version: 5.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Datenbank: `usr_p256313_2`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `ddfa_main_domain_model_language`
--

CREATE TABLE IF NOT EXISTS `ddfa_main_domain_model_language` (
  `persistence_object_identifier` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `language` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `rtl` tinyint(1) NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Daten für Tabelle `ddfa_main_domain_model_language`
--

INSERT INTO `ddfa_main_domain_model_language` (`persistence_object_identifier`, `code`, `language`, `rtl`, `created`, `updated`) VALUES
('086b68a7-c101-4922-977b-7d77bb860ac8', 'ar', 'العربية (Arabic)', 1, '2015-06-05 00:12:55', '2015-06-05 00:13:18'),
('1ca3f807-e755-4d0e-9382-4a59b73b559c', 'fa', 'فارسی (Persian)', 1, '2015-06-05 00:13:03', '2015-06-05 00:13:19'),
('4c9d8930-2314-46cb-81b6-85ed154d628a', 'fr', 'Français', 0, '2015-06-05 00:13:08', '2015-06-05 00:13:21'),
('521c1c80-0074-4a7f-a9c2-52c119d7b7c3', 'en', 'English', 0, '2015-06-05 00:13:09', '2015-06-05 00:13:23'),
('52ba3ee7-e806-4597-9e2c-c76759a94707', 'sr', 'Serbian', 0, '2015-06-05 00:13:11', '2015-06-05 00:13:24'),
('6c8b0f53-099a-4d9b-9262-b40225c2e2ba', 'ur', 'Urdu', 1, '2015-06-05 00:13:12', '2015-06-05 00:13:25'),
('89bf260b-95a0-4ae3-8e8f-f203103f69aa', 'ru', 'Russian', 0, '2015-06-05 00:13:13', '2015-06-05 00:13:26'),
('90504c74-bf42-45d9-818f-21076db6a461', 'it', 'Italian', 0, '2015-06-05 00:13:14', '2015-06-05 00:13:27'),
('a2938e05-3e95-4658-b2d9-3c2fd4d43fe8', 'de', 'German', 0, '2015-06-05 00:13:15', '2015-06-05 00:13:28'),
('bc0e89ae-f3b5-4e22-8099-92f270b0c39f', 'ti', 'Tigrinya', 0, '2015-06-05 00:13:15', '2015-06-05 00:13:29');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `ddfa_main_domain_model_language`
--
ALTER TABLE `ddfa_main_domain_model_language`
 ADD PRIMARY KEY (`persistence_object_identifier`), ADD UNIQUE KEY `flow_identity_ddfa_main_domain_model_language` (`code`,`persistence_object_identifier`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
