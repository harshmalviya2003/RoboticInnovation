import { users, type User, type InsertUser, type ContactFormData, type ContactSubmission, type SiteStats } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(submission: ContactFormData): Promise<ContactSubmission>;
  getStats(): Promise<SiteStats>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  userCurrentId: number;
  contactCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.userCurrentId = 1;
    this.contactCurrentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async createContactSubmission(submission: ContactFormData): Promise<ContactSubmission> {
    const id = this.contactCurrentId++;
    const createdAt = new Date();
    
    const contactSubmission: ContactSubmission = {
      ...submission,
      id,
      createdAt
    };
    
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }
  
  async getStats(): Promise<SiteStats> {
    const contactSubmissionsCount = this.contactSubmissions.size;
    
    // Calculate service breakdown
    const servicesBreakdown: Record<string, number> = {};
    
    // Convert Map to array first for easier iteration
    const submissions = Array.from(this.contactSubmissions.entries());
    for (let i = 0; i < submissions.length; i++) {
      const submission = submissions[i][1];
      const service = submission.service;
      servicesBreakdown[service] = (servicesBreakdown[service] || 0) + 1;
    }
    
    return {
      contactSubmissionsCount,
      servicesBreakdown
    };
  }
}

export const storage = new MemStorage();
