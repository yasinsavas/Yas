import React from 'react';

interface FormActionsProps {
  onClose: () => void;
  isSubmitting?: boolean;
  submitText?: string;
}

export default function FormActions({ 
  onClose, 
  isSubmitting = false, 
  submitText = 'Kaydet' 
}: FormActionsProps) {
  return (
    <div className="flex justify-end gap-3 pt-4 border-t border-gray-100/50">
      <button
        type="button"
        onClick={onClose}
        disabled={isSubmitting}
        className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100/80 rounded-lg transition-colors disabled:opacity-50"
      >
        İptal
      </button>
      <button
        type="submit"
        disabled={isSubmitting}
        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center gap-2"
      >
        {isSubmitting ? (
          <>
            <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            İşleniyor...
          </>
        ) : (
          submitText
        )}
      </button>
    </div>
  );
}