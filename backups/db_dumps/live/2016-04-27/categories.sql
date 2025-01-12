
CREATE TABLE IF NOT EXISTS `ddfa_main_domain_model_category` (
  `persistence_object_identifier` char(36) COLLATE utf8_unicode_ci NOT NULL COMMENT '(DC2Type:guid)',
  `entry_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `locale` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `type` int(11) NOT NULL,
  PRIMARY KEY (`persistence_object_identifier`),
  UNIQUE KEY `UNIQ_CCFEF30F47A46B0A` (`persistence_object_identifier`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Daten für Tabelle `ddfa_main_domain_model_category`
--

INSERT INTO `ddfa_main_domain_model_category` (`persistence_object_identifier`, `entry_id`, `locale`, `name`, `description`, `created`, `updated`, `type`) VALUES
('07f88130-7d98-4a20-bbb8-d0d98f55c553', '55701e6a33160', 'de', 'community', '', '2015-06-04 11:46:18', '2015-06-04 11:46:18', 1),
('102ec0ae-84c5-40bd-a991-7e84192d2cd7', '556a30ce2e99e', 'de', 'wifi', '', '2015-05-30 23:51:10', '2015-05-30 23:51:10', 3),
('21484033-ae7d-4dbe-9a75-f073f7216a3e', '556b56a26651c', 'de', 'other', '', '2015-05-31 20:44:50', '2015-05-31 20:44:50', 3),
('29eaaac1-a0c8-47da-806c-078e48553588', '556a3164ada0f', 'de', 'islam', '', '2015-05-30 23:53:40', '2015-05-30 23:53:59', 3),
('4e058e43-58cd-4175-b3f9-dadbcbf2534c', '556a31592d1e2', 'de', 'jewish', '', '2015-05-30 23:53:29', '2015-05-30 23:53:29', 3),
('4f6eb4ec-2f13-4f20-8492-90f9ca7aaee4', '5570d742ccfeb', 'de', 'trafficStop', '', '2015-06-05 00:54:58', '2015-06-17 14:59:49', 3),
('5dddf63d-ccf6-44e2-8daf-81bb44507fdd', '55701e31bc4ef', 'de', 'language', '', '2015-06-04 11:45:21', '2015-06-04 11:45:21', 1),
('6b1c7235-4fd4-4b5b-8a88-77fb26c93292', '5570ae972a1a3', 'de', 'hospital', '', '2015-06-04 22:01:27', '2015-06-04 22:01:27', 3),
('744f41e9-799c-432b-a9a3-e78d471ec51a', '55701e5f83ba7', 'de', 'donation', '', '2015-06-04 11:46:07', '2015-06-04 11:46:07', 1),
('adfb2457-819c-4574-ace1-56f5b38d8f96', '556e2704b4e91', 'de', 'leisure', '', '2015-06-02 23:58:28', '2015-06-02 23:58:28', 1),
('c29989c8-f729-4976-b68b-53b80dc23df2', '556a30f5c5375', 'de', 'christian', '', '2015-05-30 23:51:49', '2015-05-30 23:54:15', 3),
('c76d965c-eacc-4b33-9e4c-ec9b1fc39043', '556b55637177d', 'de', 'shop', '', '2015-05-31 20:39:31', '2015-05-31 20:39:31', 3),
('cdc09224-a647-48ff-9971-87b22896f76a', '556a30dc23b45', 'de', 'housing', '', '2015-05-30 23:51:24', '2015-05-30 23:51:24', 3),
('d29bbe86-ecd6-42df-8054-70a90ec7b535', '55701e3a1dee3', 'de', 'jobs', '', '2015-06-04 11:45:30', '2015-06-04 11:45:30', 1),
('df402493-f467-4472-8b98-9038d2ac967e', '55701e1d724b7', 'de', 'consultation', '', '2015-06-04 11:45:01', '2015-06-04 11:45:01', 1),
('e39fd3c8-c86a-43f8-a37e-9e6e999bda94', '556a2fa08904d', 'de', 'public', '', '2015-05-30 23:46:08', '2015-05-30 23:50:50', 3),
('fa815876-ad1d-433e-87ff-8de20639e2b1', '55701e2712c4c', 'de', 'medic', '', '2015-06-04 11:45:11', '2015-06-04 11:45:11', 1);