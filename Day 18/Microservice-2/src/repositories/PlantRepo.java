package AdminPCA.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import AdminPCA.entities.PlantEntity;


public interface PlantRepo extends JpaRepository<PlantEntity, Integer> {

}
