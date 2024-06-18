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
-- Table structure for table `nutrition_facts`
--

DROP TABLE IF EXISTS `nutrition_facts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nutrition_facts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `food_id` int DEFAULT NULL,
  `calories` int NOT NULL,
  `protein` int NOT NULL,
  `carbs` int NOT NULL,
  `fats` int NOT NULL,
  `sugar` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `food_id` (`food_id`),
  CONSTRAINT `nutrition_facts_ibfk_1` FOREIGN KEY (`food_id`) REFERENCES `food` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nutrition_facts`
--

LOCK TABLES `nutrition_facts` WRITE;
/*!40000 ALTER TABLE `nutrition_facts` DISABLE KEYS */;
INSERT INTO `nutrition_facts` VALUES (37,37,350,20,40,15,3),(38,38,250,20,10,15,5),(39,39,300,25,10,18,5),(49,49,450,30,12,35,3),(50,50,400,15,45,20,10),(51,51,350,25,30,15,5),(52,52,600,15,50,40,10),(53,53,250,3,30,15,20),(54,54,200,2,40,5,25),(55,55,200,10,20,10,1),(56,56,147,2,27,5,19),(57,57,100,1,20,2,10),(58,58,300,15,20,18,5),(59,59,200,2,40,5,20),(60,60,150,3,10,12,5),(61,61,110,1,28,0,15),(62,62,95,1,25,0,19),(63,63,25,1,5,0,3),(64,64,4,0,1,0,0);

/*!40000 ALTER TABLE `nutrition_facts` ENABLE KEYS */;
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
