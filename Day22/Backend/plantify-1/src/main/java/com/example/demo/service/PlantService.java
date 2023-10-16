package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.model.PlantEntity;

import com.example.demo.repository.PlantRepo;

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

	public void deleteData(@RequestParam int id) {
		pr.deleteById(id);
		
	}
}
