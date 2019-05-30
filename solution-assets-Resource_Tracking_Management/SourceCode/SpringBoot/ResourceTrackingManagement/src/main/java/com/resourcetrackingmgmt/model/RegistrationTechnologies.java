package com.resourcetrackingmgmt.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "t_regtechnologies_details")
public class RegistrationTechnologies {

	@Id
	@Column(name = "id")
	private int id;

	@Column(name = "technologyName")
	private String technologyName;

	/**
	 * @return the id
	 */
	public int getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(int id) {
		this.id = id;
	}

	/**
	 * @return the technologyName
	 */
	public String getTechnologyName() {
		return technologyName;
	}

	/**
	 * @param technologyName the technologyName to set
	 */
	public void setTechnologyName(String technologyName) {
		this.technologyName = technologyName;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "RegistrationTechnologies [id=" + id + ", technologyName=" + technologyName + "]";
	}

}
