package com.resourcetrackingmgmt.model;

import java.time.LocalDate;
import java.util.Date;

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
@Table(name = "T_REQUEST_DETAILS")
public class Requests {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "requestId")
	private int requestId;

	@Column(name = "typeOfRequest")
	private String typeOfRequest;

	@Column(name = "userId")
	private int userId;

	@Column(name = "userName")
	private String userName;

	@Column(name = "leadId")
	private int leadId;

	@Column(name = "leaveStartDate")
	private LocalDate leaveStartDate;

	@Column(name = "leaveEndDate")
	private LocalDate leaveEndDate;

	@Column(name = "taskId")
	private int taskId;

	@Column(name = "extenstionDate")
	private String extenstionDate;

	@Column(name = "comments")
	private String comments;

	@Column(name = "submittedOn")
	private Date submittedOn;

	@Column(name = "status")
	private String status;

	@Column(name = "taskName")
	private String taskName;

	@Column(name = "technology")
	private String technology;

	/**
	 * @return the requestId
	 */
	public int getRequestId() {
		return requestId;
	}

	/**
	 * @param requestId the requestId to set
	 */
	public void setRequestId(int requestId) {
		this.requestId = requestId;
	}

	/**
	 * @return the typeOfRequest
	 */
	public String getTypeOfRequest() {
		return typeOfRequest;
	}

	/**
	 * @param typeOfRequest the typeOfRequest to set
	 */
	public void setTypeOfRequest(String typeOfRequest) {
		this.typeOfRequest = typeOfRequest;
	}

	/**
	 * @return the userId
	 */
	public int getUserId() {
		return userId;
	}

	/**
	 * @param userId the userId to set
	 */
	public void setUserId(int userId) {
		this.userId = userId;
	}

	/**
	 * @return the userName
	 */
	public String getUserName() {
		return userName;
	}

	/**
	 * @param userName the userName to set
	 */
	public void setUserName(String userName) {
		this.userName = userName;
	}

	/**
	 * @return the leadId
	 */
	public int getLeadId() {
		return leadId;
	}

	/**
	 * @param leadId the leadId to set
	 */
	public void setLeadId(int leadId) {
		this.leadId = leadId;
	}

	/**
	 * @return the leaveStartDate
	 */
	public LocalDate getLeaveStartDate() {
		return leaveStartDate;
	}

	/**
	 * @param leaveStartDate the leaveStartDate to set
	 */
	public void setLeaveStartDate(LocalDate leaveStartDate) {
		this.leaveStartDate = leaveStartDate;
	}

	/**
	 * @return the leaveEndDate
	 */
	public LocalDate getLeaveEndDate() {
		return leaveEndDate;
	}

	/**
	 * @param leaveEndDate the leaveEndDate to set
	 */
	public void setLeaveEndDate(LocalDate leaveEndDate) {
		this.leaveEndDate = leaveEndDate;
	}

	/**
	 * @return the taskId
	 */
	public int getTaskId() {
		return taskId;
	}

	/**
	 * @param taskId the taskId to set
	 */
	public void setTaskId(int taskId) {
		this.taskId = taskId;
	}

	/**
	 * @return the extenstionDate
	 */
	public String getExtenstionDate() {
		return extenstionDate;
	}

	/**
	 * @param extenstionDate the extenstionDate to set
	 */
	public void setExtenstionDate(String extenstionDate) {
		this.extenstionDate = extenstionDate;
	}

	/**
	 * @return the comments
	 */
	public String getComments() {
		return comments;
	}

	/**
	 * @param comments the comments to set
	 */
	public void setComments(String comments) {
		this.comments = comments;
	}

	/**
	 * @return the submittedOn
	 */
	public Date getSubmittedOn() {
		return submittedOn;
	}

	/**
	 * @param submittedOn the submittedOn to set
	 */
	public void setSubmittedOn(Date submittedOn) {
		this.submittedOn = submittedOn;
	}

	/**
	 * @return the status
	 */
	public String getStatus() {
		return status;
	}

	/**
	 * @param status the status to set
	 */
	public void setStatus(String status) {
		this.status = status;
	}

	/**
	 * @return the taskName
	 */
	public String getTaskName() {
		return taskName;
	}

	/**
	 * @param taskName the taskName to set
	 */
	public void setTaskName(String taskName) {
		this.taskName = taskName;
	}

	/**
	 * @return the technology
	 */
	public String getTechnology() {
		return technology;
	}

	/**
	 * @param technology the technology to set
	 */
	public void setTechnology(String technology) {
		this.technology = technology;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Requests [requestId=" + requestId + ", typeOfRequest=" + typeOfRequest + ", userId=" + userId
				+ ", userName=" + userName + ", leadId=" + leadId + ", leaveStartDate=" + leaveStartDate
				+ ", leaveEndDate=" + leaveEndDate + ", taskId=" + taskId + ", extenstionDate=" + extenstionDate
				+ ", comments=" + comments + ", submittedOn=" + submittedOn + ", status=" + status + ", taskName="
				+ taskName + ", technology=" + technology + "]";
	}

}