package PlantsCareAssistant.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import PlantsCareAssistant.entities.PlantEntity;

@Repository
public interface PlantRepo extends JpaRepository<PlantEntity,Integer>
{
	
}
