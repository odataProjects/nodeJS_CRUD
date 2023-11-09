-- MariaDB dump 10.19  Distrib 10.6.10-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: nodeJenkins
-- ------------------------------------------------------
-- Server version	10.6.10-MariaDB-1+b1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Employee`
--

DROP TABLE IF EXISTS `Employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Employee` (
  `id_employee` int(11) NOT NULL AUTO_INCREMENT,
  `nom_employee` varchar(50) DEFAULT NULL,
  `salaire_employee` double DEFAULT NULL,
  PRIMARY KEY (`id_employee`)
) ENGINE=InnoDB AUTO_INCREMENT=104 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Employee`
--

LOCK TABLES `Employee` WRITE;
/*!40000 ALTER TABLE `Employee` DISABLE KEYS */;
INSERT INTO `Employee` VALUES (25,'xghj',5000),(27,'ok',654758),(28,'dsfgh',87876),(29,'ok',3444),(30,'John Doe',50000),(31,'John Doe',50000),(32,'John Doe',50000),(33,'John Doe',50000),(34,'John Doe',50000),(35,'John Doe',50000),(36,'John Doe',50000),(37,'John Doe',50000),(38,'John Doe',50000),(39,'John Doe',50000),(40,'John Doe',50000),(41,'John Doe',50000),(42,'John Doe',50000),(43,'John Doe',50000),(44,'John Doe',50000),(45,'John Doe',50000),(46,'John Doe',50000),(47,'John Doe',50000),(48,'John Doe',50000),(49,'John Doe',50000),(50,'John Doe',50000),(51,'John Doe',50000),(52,'John Doe',50000),(53,'John Doe',50000),(54,'John Doe',50000),(55,'John Doe',50000);
/*!40000 ALTER TABLE `Employee` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-08 14:28:50
