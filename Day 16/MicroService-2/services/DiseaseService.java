package AdminPCA.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import AdminPCA.entities.DiseaseEntity;
import AdminPCA.repositories.DiseaseRepo;

@Service
public class DiseaseService 
{
	@Autowired
	DiseaseRepo dr;
	
	public List<DiseaseEntity> getDiseaseData()
	{
		return dr.findAll();
	}
	public void postDiseaseData(DiseaseEntity te)
	{
		dr.save(te);
	}
	public void putDiseaseData(int id, DiseaseEntity te1)
	{
		DiseaseEntity te2 = dr.findById(id).get();
		te2.setDiseaseId(te1.getDiseaseId());
		te2.setDiseaseName(te1.getDiseaseName());
		te2.setDiseaseDesc(te1.getDiseaseDesc());
		te2.setSolution(te1.getSolution());
		dr.save(te2);
	}
	public void deleteDiseaseData(int id)
	{
		dr.deleteById(id);
	}
}
