package AdminPCA.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "plants_data")
public class PlantEntity{

	@Id
	@Column
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	Integer id;
	@Column
	String plantName;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPlantName() {
		return plantName;
	}
	public void setPlantName(String plantName) {
		this.plantName = plantName;
	}
	public String getPlantType() {
		return plantType;
	}
	public void setPlantType(String plantType) {
		this.plantType = plantType;
	}
	public String getRoom() {
		return room;
	}
	public void setRoom(String room) {
		this.room = room;
	}
	public String getWatering() {
		return watering;
	}
	public void setWatering(String watering) {
		this.watering = watering;
	}
	public String getSunlight() {
		return sunlight;
	}
	public void setSunlight(String sunlight) {
		this.sunlight = sunlight;
	}
	@Column
	String plantType;
	@Column
	String room;
	@Column
	String watering;
	@Column
	String sunlight;
	
}
