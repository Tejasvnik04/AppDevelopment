package AdminPCA.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import AdminPCA.entities.DiseaseEntity;



@Repository
public interface DiseaseRepo extends JpaRepository<DiseaseEntity,Integer>
{

}
