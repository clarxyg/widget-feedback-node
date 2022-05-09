
export interface FeedbackCreateData {
    type: string;
    comment: string;
    screenshot?: string;
}

export interface FeedbacksRepository {
    create: (data: FeedbackCreateData) => Promise<void>;
}  

// No Javascript toda função assíncrona vira uma Promise