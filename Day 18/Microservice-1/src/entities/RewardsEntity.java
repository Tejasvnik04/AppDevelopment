package PlantsCareAssistant.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "Rewards")
public class RewardsEntity 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getNo_of_plants() {
		return no_of_plants;
	}
	public void setNo_of_plants(int no_of_plants) {
		this.no_of_plants = no_of_plants;
	}
	public int getNo_of_coins() {
		return no_of_coins;
	}
	public void setNo_of_coins(int no_of_coins) {
		this.no_of_coins = no_of_coins;
	}
	public int getNo_of_rewards() {
		return no_of_rewards;
	}
	public void setNo_of_rewards(int no_of_rewards) {
		this.no_of_rewards = no_of_rewards;
	}
	@Column(name = "No_of_plants")
	int no_of_plants;
	@Column(name = "No_of_coins")
	int no_of_coins;
	@Column(name = "no_rewards_won")
	int no_of_rewards;
}
