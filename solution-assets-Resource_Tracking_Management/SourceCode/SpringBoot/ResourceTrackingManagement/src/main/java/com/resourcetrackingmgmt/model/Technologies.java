package com.resourcetrackingmgmt.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author Kranthichandu
 *
 */
@Entity
@Table(name = "T_TECHNOLOGIES_DETAILS")
public class Technologies {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "technologyId")
	private long technologyId;

	@Column(name = "technologyName")
	private String technologyName;

	@Column(name = "subTechnologyName")
	private String subTechnologyName;

	@Column(name = "links")
	private String links;

	/**
	 * @return the technologyId
	 */
	public long getTechnologyId() {
		return technologyId;
	}

	/**
	 * @param technologyId the technologyId to set
	 */
	public void setTechnologyId(long technologyId) {
		this.technologyId = technologyId;
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

	/**
	 * @return the subTechnologyName
	 */
	public String getSubTechnologyName() {
		return subTechnologyName;
	}

	/**
	 * @param subTechnologyName the subTechnologyName to set
	 */
	public void setSubTechnologyName(String subTechnologyName) {
		this.subTechnologyName = subTechnologyName;
	}

	/**
	 * @return the links
	 */
	public String getLinks() {
		return links;
	}

	/**
	 * @param links the links to set
	 */
	public void setLinks(String links) {
		this.links = links;
	}

	@Override
	public String toString() {
		return "Technologies [technologyId=" + technologyId + ", technologyName=" + technologyName
				+ ", subTechnologyName=" + subTechnologyName + ", links=" + links + "]";
	}

}
