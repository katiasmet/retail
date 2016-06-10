-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Gegenereerd op: 09 jun 2016 om 22:20
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
(1, 1, 1, 'Grondstoffen worden wereldwijd aangekocht.'),
(2, 1, 2, 'Inspiratie wordt opgedaan, geuren worden gezocht en parfums worden samengesteld.'),
(3, 1, 3, 'Er wordt een prototype gemaakt van het parfum voor de ultieme geurtest.'),
(4, 1, 4, 'Ons nieuw product ondergaat een microbiologische test om de kwaliteit na te gaan. ');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `rtl_creation_step_images`
--

CREATE TABLE `rtl_creation_step_images` (
  `id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  `step` int(11) NOT NULL,
  `class` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `img` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Gegevens worden geëxporteerd voor tabel `rtl_creation_step_images`
--

INSERT INTO `rtl_creation_step_images` (`id`, `store_id`, `step`, `class`, `img`) VALUES
(1, 1, 1, 'bv-s1-bg', 'bv_s1_bg.jpg'),
(2, 1, 1, 'bv-s1-items', 'bv_s1_items.png'),
(3, 1, 1, 'bv-s1-hand', 'bv_s1_hand.png'),
(4, 1, 2, 'bv-s2-bg', 'bv_s2_bg.jpg'),
(5, 1, 2, 'bv-s2-item', 'bv_s2_item.png'),
(6, 1, 2, 'bv-s2-notes', 'bv_s2_item2.png'),
(7, 1, 2, 'bv-s2-hand', 'bv_s2_hand.png'),
(8, 1, 3, 'bv-s3-bg', 'bv_s3_bg.jpg'),
(9, 1, 3, 'bv-s3-items', 'bv_s3_items.png'),
(10, 1, 3, 'bv-s3-hand', 'bv_s3_hand.png'),
(11, 1, 4, 'bv-s4-bg', 'bv_s4_bg.jpg'),
(13, 1, 4, 'bv-s4-items', 'bv_s4_items.png'),
(14, 1, 4, 'bv-s4-hands', 'bv_s4_hands.png');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `rtl_events`
--

CREATE TABLE `rtl_events` (
  `id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `info` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Gegevens worden geëxporteerd voor tabel `rtl_events`
--

INSERT INTO `rtl_events` (`id`, `store_id`, `date`, `info`) VALUES
(1, 1, '2016-07-05', 'samenstellen geuren'),
(2, 1, '2016-06-20', 'geurenquiz');

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
-- Tabelstructuur voor tabel `rtl_product_details`
--

CREATE TABLE `rtl_product_details` (
  `id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  `image` text COLLATE utf8_unicode_ci NOT NULL,
  `product_type` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `detail_title` text COLLATE utf8_unicode_ci NOT NULL,
  `info` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Gegevens worden geëxporteerd voor tabel `rtl_product_details`
--

INSERT INTO `rtl_product_details` (`id`, `store_id`, `image`, `product_type`, `detail_title`, `info`) VALUES
(1, 1, 'bv_products.png', 'parfums', 'anticommercieel', 'Ik probeer mijn parfums zo weinig mogelijk te commercialiseren. Mijn producten moeten uniek en speciaal blijven! Ik maak geen parfums om hen in massa te verkopen.'),
(2, 1, 'bv_products.png', 'parfums', 'kwaliteit', 'Ik maak bijvoorbeeld gebruik van niet geïndustrialiseerde alcohol. Omdat alleen de beste producten goed genoeg zijn voor mijn creaties! Ik zal dan ook niet kijken naar de prijzen van de producten, alleen het beste is goed genoeg.'),
(3, 1, 'bv_products.png', 'parfums', 'streekproducten', 'Daarnaast steun ik de locale economie. Ik maak gebruik van producten die in de streek van Schiedam gemaakt worden. Zo wil ik in de toekomst gebruik maken van lokaal gedestilleerde whisky.'),
(4, 1, 'bv_products.png', 'parfums', 'luxueuze parfums', 'De beste producten worden gebruikt in mijn parfums. derderangsproducten gebruiken is geen optie, alleen het beste is goed genoeg. Mijn parfums zijn dus van de beste kwaliteit wat hen zeer luxueus maakt.');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `rtl_stores`
--

CREATE TABLE `rtl_stores` (
  `id` int(11) NOT NULL,
  `name` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `store_name` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `twitterHandler` text COLLATE utf8_unicode_ci NOT NULL,
  `craft` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `icon` text COLLATE utf8_unicode_ci NOT NULL,
  `address` text COLLATE utf8_unicode_ci NOT NULL,
  `latitude` text COLLATE utf8_unicode_ci NOT NULL,
  `longitude` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Gegevens worden geëxporteerd voor tabel `rtl_stores`
--

INSERT INTO `rtl_stores` (`id`, `name`, `store_name`, `twitterHandler`, `craft`, `icon`, `address`, `latitude`, `longitude`) VALUES
(1, 'Babita Versluis', 'Nugi', 'bibouskincare', 'Parfumerie', 'perfume.png', 'Hoogstraat 80, 3111 HD', '51.9152698', '4.3963989'),
(2, 'Michael Boekholt', 'Schiedams gebrand', '', 'Koffie branderij', 'coffee.png', 'Hoogstraat 150, 3111 HD Schiedam', '51.9167852', '4.3951639'),
(3, 'Herman Jansen', 'Herman Jansen', '', 'Distellerie', 'distillery.png', 'Hoogstraat 1, 3111 HD Schiedam', '51.9144769', '4.3992894');

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
-- Tabelstructuur voor tabel `rtl_store_tags`
--

CREATE TABLE `rtl_store_tags` (
  `id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Gegevens worden geëxporteerd voor tabel `rtl_store_tags`
--

INSERT INTO `rtl_store_tags` (`id`, `store_id`, `tag_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `rtl_tags`
--

CREATE TABLE `rtl_tags` (
  `id` int(11) NOT NULL,
  `tag` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Gegevens worden geëxporteerd voor tabel `rtl_tags`
--

INSERT INTO `rtl_tags` (`id`, `tag`) VALUES
(1, 'luxe'),
(2, 'parfum'),
(3, 'verzorging');

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `rtl_creation_steps`
--
ALTER TABLE `rtl_creation_steps`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `rtl_creation_step_images`
--
ALTER TABLE `rtl_creation_step_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `rtl_events`
--
ALTER TABLE `rtl_events`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `rtl_opening_hours`
--
ALTER TABLE `rtl_opening_hours`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `rtl_product_details`
--
ALTER TABLE `rtl_product_details`
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
-- Indexen voor tabel `rtl_store_tags`
--
ALTER TABLE `rtl_store_tags`
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
-- AUTO_INCREMENT voor een tabel `rtl_creation_step_images`
--
ALTER TABLE `rtl_creation_step_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT voor een tabel `rtl_events`
--
ALTER TABLE `rtl_events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT voor een tabel `rtl_opening_hours`
--
ALTER TABLE `rtl_opening_hours`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT voor een tabel `rtl_product_details`
--
ALTER TABLE `rtl_product_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
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
-- AUTO_INCREMENT voor een tabel `rtl_store_tags`
--
ALTER TABLE `rtl_store_tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT voor een tabel `rtl_tags`
--
ALTER TABLE `rtl_tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
