package PlantsCareAssistant.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import PlantsCareAssistant.entities.PlantEntity;


public interface PlantRepo extends JpaRepository<PlantEntity, Integer> 
{
	
}
