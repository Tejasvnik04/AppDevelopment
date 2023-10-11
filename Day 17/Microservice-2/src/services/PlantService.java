package AdminPCA.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import AdminPCA.entities.PlantEntity;
import AdminPCA.repositories.PlantRepo;

@Service
public class PlantService {

	@Autowired
	PlantRepo pr;
	
	public List<PlantEntity> getPlants()
	{
		return pr.findAll();
	}
	
	public void SaveData(PlantEntity p)
	{
		pr.save(p);
	}
	public void updateData(PlantEntity obj) {
		pr.save(obj);
	}

	public void deleteData(int id) {
		pr.deleteById(id);
		
	}
}
