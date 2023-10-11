package AdminPCA.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import AdminPCA.entities.ToolEntity;


@Repository
public interface ToolRepo extends JpaRepository<ToolEntity,Integer>
{
	
}
