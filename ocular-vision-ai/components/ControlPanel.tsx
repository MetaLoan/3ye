
import React from 'react';
import { EyeEffectType } from '../types';

interface ControlPanelProps {
  currentEffect: EyeEffectType;
  onEffectChange: (effect: EyeEffectType) => void;
  onAnalyze: () => void;
  isAnalyzing: boolean;
  isActive: boolean;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ 
  currentEffect, 
  onEffectChange, 
  onAnalyze, 
  isAnalyzing,
  isActive
}) => {
  const effects = Object.values(EyeEffectType);

  return (
    <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 flex flex-col gap-6 shadow-xl">
      <div>
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
          Augmentation Preset
        </h3>
        <div className="grid grid-cols-1 gap-2">
          {effects.map((effect) => (
            <button
              key={effect}
              onClick={() => onEffectChange(effect)}
              disabled={!isActive}
              className={`text-left px-4 py-3 rounded-xl transition-all flex items-center justify-between border ${
                currentEffect === effect 
                  ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-900/20 translate-x-1' 
                  : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200'
              } ${!isActive ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <span className="font-semibold text-sm">{effect}</span>
              {currentEffect === effect && (
                <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="pt-6 border-t border-slate-800">
        <button
          onClick={onAnalyze}
          disabled={!isActive || isAnalyzing}
          className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all ${
            isAnalyzing 
              ? 'bg-slate-800 text-slate-500' 
              : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-purple-900/20 active:scale-95'
          } ${!isActive ? 'opacity-50' : ''}`}
        >
          {isAnalyzing ? (
            <>
              <svg className="animate-spin h-5 w-5 text-slate-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Reading Soul...
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.673.337a4 4 0 01-2.573.345l-2.387-.477a2 2 0 00-1.022.547l-2.13 2.13a2 2 0 01-3.047-2.67l2.13-2.13a2 2 0 00.547-1.022l.477-2.387a6 6 0 00-.517-3.86l-.337-.673a4 4 0 01-.345-2.573l.477-2.387a2 2 0 00-.547-1.022L1.732 3.732a2 2 0 012.67-3.047l2.13 2.13a2 2 0 001.022.547l2.387.477a6 6 0 003.86-.517l.673-.337a4 4 0 012.573-.345l2.387.477a2 2 0 001.022-.547l2.13-2.13a2 2 0 013.047 2.67l-2.13 2.13z" />
              </svg>
              AI Aura Scan
            </>
          )}
        </button>
        <p className="mt-3 text-[10px] text-center text-slate-500 uppercase tracking-widest leading-relaxed">
          Analyzes gaze stability and ocular micro-expressions via Gemini 3
        </p>
      </div>
    </div>
  );
};

export default ControlPanel;
