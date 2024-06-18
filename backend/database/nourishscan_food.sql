-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: nourishscan
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `food`
--

DROP TABLE IF EXISTS `food`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `food` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` text,
  `images` varchar(255) DEFAULT NULL,
  `ingredients` varchar(255) DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `food_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food`
--

LOCK TABLES `food` WRITE;
/*!40000 ALTER TABLE `food` DISABLE KEYS */;
INSERT INTO `food` VALUES (37,'Bakso','Indonesian meatball soup served with noodles and vegetables.',NULL,'Beef or chicken meatballs, Broth (beef or chicken), Noodles, Soy sauce, Sambal',4),(38,'Sate','Grilled Indonesian meat skewers served with a spicy sauce.',NULL,'Chicken or beef, Skewers, Soy sauce, Garlic, Shallots, Brown sugar, Peanut sauce (optional)',4),(39,'Ayam Bakar','Grilled marinated Indonesian chicken with rich, flavorful spices.',NULL,'Chicken, Sweet soy sauce, Garlic, Shallots, Turmeric, Ginger, Lemongrass',4),(49,'Rendang','Slow-cooked Indonesian beef curry in rich, spicy coconut sauce.',NULL,'Beef, Coconut milk, Shallots, Garlic, Ginger, Galangal, Lemongrass',4),(50,'Gado-Gado','Indonesian salad with vegetables, tofu, eggs, and peanut sauce.',NULL,' Mixed vegetables, Tofu, Tempeh, Hard-boiled eggs, Lontong',3),(51,'Soto Ayam','Indonesian chicken soup with aromatic herbs and spices.',NULL,'Chicken, Rice noodles, Bean sprouts, Hard-boiled eggs, Lime wedges',4),(52,'Martabak Manis','Indonesian stuffed pancake.',NULL,'Flour, Yeast, Water, Sugar, Eggs, Milk, Butter, Toppings',2),(53,'Es Cendol','Indonesian dessert drink with green rice flour jelly and coconut milk.',NULL,'Green rice flour jelly, Coconut milk, Palm sugar syrup',2),(54,'Es Campur','Indonesian mixed dessert with various ingredients and syrup.',NULL,'Shaved ice, Red beans, Grass jelly, Fruit chunks, Coconut milk',2),(55,'Pempek','Indonesian fishcake served with tangy vinegar sauce.',NULL,'Tapioca starch, Fish (usually mackerel), Garlic, Salt, Egg.',4),(56,'Durian','Southeast Asian fruit known for its distinctive odor.',NULL,NULL,1),(57,'Klepon','Indonesian rice cake filled with palm sugar, coated in grated coconut.',NULL,'Glutinous rice flour, Pandan leaves, Palm sugar, Grated coconut.',2),(58,'Tahu Tek','Indonesian dish with fried tofu, vegetables, and peanut sauce.',NULL,'Tofu, Cabbage, Bean sprouts, Cucumber, Eggs.',3),(59,'Pisang Ijo','Indonesian dessert made with green banana wrapped in pandan-flavored pancake skin.',NULL,'Ripe bananas, Rice flour, Pandan leaves, Coconut milk, Palm sugar.',2),(60,'Sayur Lodeh','Indonesian vegetable soup cooked in coconut milk and spices.',NULL,'Mixed vegetables (cabbage, long beans, carrots), Coconut milk, Turmeric, Galangal, Lemongrass.',3),(61,'banana',' elongated, edible yellow fruit rich in vitamins and benefits','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4lkd6bdepywtiE9R4H0FjKHf2SFYQZ-qDVQ&s',NULL,1),(62,'apple','a round, edible fruit produced by an apple tree','https://img.freepik.com/premium-photo/red-apples-isolated-white-background-ripe-fresh-apples-clipping-path-apple-with-leaf_299651-595.jpg',NULL,1),(63,'cabbage','Cabbage, comprising several cultivars of Brassica oleracea, is a leafy green, red, or white biennial plant grown as an annual vegetable crop for its dense-leaved heads.','https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSlSmMQmoGhFnckZYMqmw7jMfr6xdBRVHpsd-PrU0D1UFa3_NB0',NULL,3),(64,'garlic','Garlic (Allium sativum) is an herb related to onion, leeks, and chives. It is commonly used for conditions related to the heart and blood system','https://veggies.my/cdn/shop/products/GarlicCloves.jpg?v=1585472534',NULL,3);

/*!40000 ALTER TABLE `food` ENABLE KEYS */;

UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-14 16:59:01
