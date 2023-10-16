package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.*;

@Entity
public class Remainders {

	 @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	    Integer id;

	    @Column
	    String reminder;

	    
//	    @ManyToOne
//	    @JoinColumn(name = "plant_id")
//	    private PlantEntity plantEntity;

	   
	    public Integer getId() {
	        return id;
	    }

	    public void setId(Integer id) {
	        this.id = id;
	    }

	    public String getReminder() {
	        return reminder;
	    }

	    public void setReminder(String reminder) {
	        this.reminder = reminder;
	    }

//	    public PlantEntity getPlantEntity() {
//	        return plantEntity;
//	    }
//
//	    public void setPlantEntity(PlantEntity plantEntity) {
//	        this.plantEntity = plantEntity;
//	    }
	
}
