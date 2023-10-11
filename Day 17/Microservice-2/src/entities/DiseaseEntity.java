package AdminPCA.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Disease")
public class DiseaseEntity 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int diseaseId;
	@Column(name = "DiseaseName")
	String diseaseName;
	@Column(name = "DiseaseDescription")
	String diseaseDesc;
	@Column(name = "Solution")
	String solution;
	public int getDiseaseId() {
		return diseaseId;
	}
	public void setDiseaseId(int diseaseId) {
		this.diseaseId = diseaseId;
	}
	public String getDiseaseName() {
		return diseaseName;
	}
	public void setDiseaseName(String diseaseName) {
		this.diseaseName = diseaseName;
	}
	public String getDiseaseDesc() {
		return diseaseDesc;
	}
	public void setDiseaseDesc(String diseaseDesc) {
		this.diseaseDesc = diseaseDesc;
	}
	public String getSolution() {
		return solution;
	}
	public void setSolution(String solution) {
		this.solution = solution;
	}
}
