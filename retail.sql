-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Gegenereerd op: 06 jun 2016 om 16:24
-- Serverversie: 5.5.42
-- PHP-versie: 7.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `retail`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `rtl_creation_steps`
--

CREATE TABLE `rtl_creation_steps` (
  `id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  `step` int(11) NOT NULL,
  `content` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Gegevens worden geëxporteerd voor tabel `rtl_creation_steps`
--

INSERT INTO `rtl_creation_steps` (`id`, `store_id`, `step`, `content`) VALUES
(1, 1, 1, 'Bestelling komt binnen.'),
(2, 1, 2, 'Product wordt samengesteld met natuurlijke producten.'),
(3, 1, 3, 'Ons nieuw product ondergaat een microbiologische test.'),
(4, 1, 4, 'Product wordt gelabeled en bezorgt aan de klant.');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `rtl_opening_hours`
--

CREATE TABLE `rtl_opening_hours` (
  `id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  `day` text COLLATE utf8_unicode_ci NOT NULL,
  `opening_time` text COLLATE utf8_unicode_ci NOT NULL,
  `closing_time` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Gegevens worden geëxporteerd voor tabel `rtl_opening_hours`
--

INSERT INTO `rtl_opening_hours` (`id`, `store_id`, `day`, `opening_time`, `closing_time`) VALUES
(1, 1, 'maandag', '08:30', '18:30'),
(2, 1, 'dinsdag', '08:30', '18:30'),
(4, 1, 'woensdag', '08:30', '18:30'),
(5, 1, 'donderdag', '08:30', '18:30'),
(6, 1, 'vrijdag', '08:30', '16:00');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `rtl_stores`
--

CREATE TABLE `rtl_stores` (
  `id` int(11) NOT NULL,
  `name` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `store_name` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `craft` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `icon` text COLLATE utf8_unicode_ci NOT NULL,
  `address` text COLLATE utf8_unicode_ci NOT NULL,
  `latitude` text COLLATE utf8_unicode_ci NOT NULL,
  `longitude` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Gegevens worden geëxporteerd voor tabel `rtl_stores`
--

INSERT INTO `rtl_stores` (`id`, `name`, `store_name`, `craft`, `icon`, `address`, `latitude`, `longitude`) VALUES
(1, 'Babita Versluis', 'Nugi', 'Parfumerie', 'perfume.svg', 'Hoogstraat 1, 3111 HD', '51.9145', '4.40148'),
(2, 'Michael Boekholt', 'Schiedams gebrand', 'Koffie branderij', 'coffee.svg', 'Hoogstraat 150, 3111 HD Schiedam', '51.9168', '4.39735'),
(3, 'Herman Jansen', 'Herman Jansen', 'Distellerie', 'distillery.svg', 'Hoogstraat 80, 3111 HD Schiedam', '51.9153', '4.39859');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `rtl_store_details`
--

CREATE TABLE `rtl_store_details` (
  `id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  `portrait` text COLLATE utf8_unicode_ci NOT NULL,
  `quote` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Gegevens worden geëxporteerd voor tabel `rtl_store_details`
--

INSERT INTO `rtl_store_details` (`id`, `store_id`, `portrait`, `quote`) VALUES
(1, 1, 'babitaversluis.gif', 'Honderden, misschien wel duizenden parfum formules in mijn hoofd. Graag had ik dit de wereld laten ruiken.');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `rtl_tags`
--

CREATE TABLE `rtl_tags` (
  `id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  `content` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Gegevens worden geëxporteerd voor tabel `rtl_tags`
--

INSERT INTO `rtl_tags` (`id`, `store_id`, `content`) VALUES
(1, 1, 'luxe'),
(2, 1, 'parfum'),
(3, 1, 'verzorging');

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `rtl_creation_steps`
--
ALTER TABLE `rtl_creation_steps`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `rtl_opening_hours`
--
ALTER TABLE `rtl_opening_hours`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `rtl_stores`
--
ALTER TABLE `rtl_stores`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `rtl_store_details`
--
ALTER TABLE `rtl_store_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `rtl_tags`
--
ALTER TABLE `rtl_tags`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `rtl_creation_steps`
--
ALTER TABLE `rtl_creation_steps`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT voor een tabel `rtl_opening_hours`
--
ALTER TABLE `rtl_opening_hours`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT voor een tabel `rtl_stores`
--
ALTER TABLE `rtl_stores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT voor een tabel `rtl_store_details`
--
ALTER TABLE `rtl_store_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT voor een tabel `rtl_tags`
--
ALTER TABLE `rtl_tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
